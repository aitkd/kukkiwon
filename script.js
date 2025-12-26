/* script.js - 기능 구현 전용 파일 */

// --- 전역 변수 ---
let currentChapterIdx = 0;
let currentMode = 'front'; // 현재 모드 ('front' or 'back')
let startA = null; 
let endB = null;

// DOM 요소
const vPlayer = document.getElementById('mainVideoPlayer');
const progressFill = document.getElementById('progressFill');
const progressHandle = document.getElementById('progressHandle');
const visualMarkerA = document.getElementById('visualMarkerA');
const visualMarkerB = document.getElementById('visualMarkerB');
const loopHighlight = document.getElementById('loopHighlight');
const progressContainer = document.getElementById('progressContainer');
const playPauseBtn = document.getElementById('playPauseBtn');
const muteBtn = document.getElementById('muteBtn');
const timeDisplay = document.getElementById('timeDisplay');
const fullscreenBtn = document.getElementById('fullscreenBtn');
const videoContainer = document.querySelector('.video-main-container'); 

// --- 초기화 ---
window.addEventListener('load', () => {
    const savedState = JSON.parse(sessionStorage.getItem('kukkiwonState'));
    if (savedState && savedState.page === 'video') {
        goToVideoPage(savedState.chapterIndex, savedState.mode || 'front');
    } else {
        document.getElementById('list-page').style.display = 'block';
        document.getElementById('video-page').style.display = 'none';
    }
});

// 카드 생성 (videoData.js의 chapters 변수 사용)
const grid = document.getElementById('poomsaeGrid');
chapters.forEach((ch, i) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <h3>${ch.title}</h3>
        <div class="mode-overlay">
            <button class="select-btn" onclick="selectMode(${i}, 'front', event)">정면</button>
            <button class="select-btn back-btn" onclick="selectMode(${i}, 'back', event)">후면</button>
        </div>
    `;
    card.onclick = () => {
        document.querySelectorAll('.card').forEach(c => {
            if (c !== card) c.classList.remove('active');
        });
        card.classList.toggle('active');
    };
    grid.appendChild(card);
});

function toggleViewMode() {
    // 현재 모드가 front면 back으로, back이면 front로 변경
    const newMode = (currentMode === 'front') ? 'back' : 'front';
    
    // 같은 챕터, 새로운 모드로 이동
    goToVideoPage(currentChapterIdx, newMode);
}

// 모드 선택 함수
function selectMode(idx, mode, event) {
    event.stopPropagation();
    goToVideoPage(idx, mode);
}

document.addEventListener('click', (e) => {
    if (!e.target.closest('.card')) {
        document.querySelectorAll('.card').forEach(c => c.classList.remove('active'));
    }
});

// --- 페이지 이동 ---
function goBackToList() {
    document.getElementById('list-page').style.display = 'block';
    document.getElementById('video-page').style.display = 'none';
    
    vPlayer.pause();
    vPlayer.src = "";
    if(playPauseBtn) playPauseBtn.innerText = "▶";
    clearRepeat();
    
    sessionStorage.setItem('kukkiwonState', JSON.stringify({ page: 'list' }));
}

function goToVideoPage(idx, mode = 'front') {
    currentChapterIdx = idx;
    currentMode = mode; 

    document.getElementById('list-page').style.display = 'none';
    document.getElementById('video-page').style.display = 'block';
    
    // [수정] 정면일 때도 "(정면)" 텍스트가 붙도록 변경
    const titleText = chapters[idx].title + (mode === 'back' ? " (후면)" : " (정면)");
    document.getElementById('sideTitle').innerText = titleText;
    
    // [기존 로직 유지] 토글 버튼 텍스트 업데이트
    const viewModeText = document.getElementById('viewModeText');
    const viewModeBtn = document.getElementById('viewModeBtn');
    
    if (viewModeText && viewModeBtn) {
        if (mode === 'front') {
            viewModeText.innerText = "후면 전환";
            viewModeBtn.classList.remove('active'); 
        } else {
            viewModeText.innerText = "정면 전환";
            viewModeBtn.classList.add('active');    
        }
    }
    
    if(playPauseBtn) playPauseBtn.innerText = "▶";
    vPlayer.playbackRate = 1.0;

    // 데이터 선택
    const targetData = (mode === 'back') ? videoDataBack : videoDataFront;
    
    renderButtons(idx, targetData);
    switchTab('single');
    
    // 영상 로드
    const firstData = targetData[idx]?.parts?.[0];
    if (firstData && firstData.file) {
        vPlayer.src = firstData.file;
        const firstBtn = document.querySelector('#tab-single .control-btn');
        if (firstBtn) {
            document.querySelectorAll('.control-btn').forEach(b => b.classList.remove('playing'));
            firstBtn.classList.add('playing');
        }
    } else {
        vPlayer.src = "";
    }
    
    vPlayer.onloadedmetadata = () => {
        clearRepeat();
        progressFill.style.width = '0%';
        if(progressHandle) progressHandle.style.left = '0%';
        if(timeDisplay) timeDisplay.innerText = `0:00 / ${formatTime(vPlayer.duration)}`;
    };

    sessionStorage.setItem('kukkiwonState', JSON.stringify({ 
        page: 'video', 
        chapterIndex: idx,
        mode: mode 
    }));
}

function renderButtons(idx, data) {
    const chapterData = data[idx] || { parts: [], courses: [] };
    const singleContainer = document.getElementById('tab-single');
    const multiContainer = document.getElementById('tab-multi');

    singleContainer.innerHTML = "";
    multiContainer.innerHTML = "";

    if (chapterData.parts) {
        chapterData.parts.forEach(item => {
            const btn = document.createElement('button');
            btn.className = 'control-btn';
            btn.innerText = item.title;
            btn.onclick = (e) => playVideo(item.file, e.target);
            singleContainer.appendChild(btn);
        });
    }

    if (chapterData.courses) {
        chapterData.courses.forEach(item => {
            const btn = document.createElement('button');
            btn.className = 'control-btn';
            btn.innerText = item.title;
            btn.onclick = (e) => playVideo(item.file, e.target);
            multiContainer.appendChild(btn);
        });
    }
}

function formatTime(seconds) {
    if (!seconds || isNaN(seconds)) return "0:00";
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
}

function switchTab(t) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.control-group').forEach(g => g.classList.remove('active'));
    
    const activeTabBtn = Array.from(document.querySelectorAll('.tab-btn'))
        .find(btn => btn.innerText === (t === 'single' ? '개별' : '연속'));
    if(activeTabBtn) activeTabBtn.classList.add('active');
    
    document.getElementById('tab-' + t).classList.add('active');
}

function playVideo(filePath, btnElement) {
    if (!filePath || filePath.trim() === "") {
        alert("준비 중입니다.");
        return;
    }
    document.querySelectorAll('.control-btn').forEach(btn => btn.classList.remove('playing'));
    if(btnElement) btnElement.classList.add('playing');

    vPlayer.src = filePath;
    vPlayer.play().catch(e => console.error("재생 오류:", e));
}

function togglePlay() {
    if (vPlayer.paused) vPlayer.play();
    else vPlayer.pause();
}

function playNextVideo() {
    const currentBtn = document.querySelector('.control-btn.playing');
    if (currentBtn) {
        const nextBtn = currentBtn.nextElementSibling;
        if (nextBtn && nextBtn.tagName === 'BUTTON') {
            nextBtn.click();
        } else {
            alert("마지막 영상입니다.");
        }
    } else {
        const firstBtn = document.querySelector('.control-group.active .control-btn');
        if(firstBtn) firstBtn.click();
    }
}

function toggleMute() {
    vPlayer.muted = !vPlayer.muted;
    updateMuteUI();
}

function setVolume(val) {
    vPlayer.volume = val;
    vPlayer.muted = (val == 0);
    updateMuteUI();
}

function updateMuteUI() {
    if (vPlayer.muted) {
        muteBtn.innerText = "🔇";
        document.getElementById('volumeSlider').value = 0;
    } else {
        muteBtn.innerText = "🔊";
        if(vPlayer.volume === 0) vPlayer.volume = 1;
        document.getElementById('volumeSlider').value = vPlayer.volume;
    }
}

function toggleSpeedMenu() {
    document.getElementById('speedMenu').classList.toggle('show');
}

function changeSpeed(rate) {
    vPlayer.playbackRate = rate;
    document.getElementById('currentSpeedText').innerText = rate + "x";
    document.getElementById('speedMenu').classList.remove('show');
    
    document.querySelectorAll('.speed-item').forEach(item => item.classList.remove('active'));
    const items = document.querySelectorAll('.speed-item');
    for(let item of items) {
        if(item.innerText.includes(rate)) {
            item.classList.add('active');
            break;
        }
    }
}

window.addEventListener('click', (e) => {
    if (!e.target.closest('.speed-dropdown-container')) {
        document.getElementById('speedMenu').classList.remove('show');
    }
});

function seekVideo(e) {
    const rect = progressContainer.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    if (isFinite(vPlayer.duration)) {
        vPlayer.currentTime = pos * vPlayer.duration;
    }
}

vPlayer.ontimeupdate = () => {
    if (vPlayer.duration) {
        const percent = (vPlayer.currentTime / vPlayer.duration) * 100;
        progressFill.style.width = `${percent}%`;
        if(progressHandle) progressHandle.style.left = `${percent}%`;
        
        if(timeDisplay) {
            timeDisplay.innerText = `${formatTime(vPlayer.currentTime)} / ${formatTime(vPlayer.duration)}`;
        }
    }
    if (startA !== null && endB !== null) {
        if (vPlayer.currentTime >= endB) {
            vPlayer.currentTime = startA;
        }
    }
};

vPlayer.addEventListener('play', () => playPauseBtn.innerText = "⏸");
vPlayer.addEventListener('pause', () => playPauseBtn.innerText = "▶");
vPlayer.addEventListener('click', togglePlay);
vPlayer.addEventListener('touchend', (e) => { e.preventDefault(); togglePlay(); });

function markA() {
    startA = vPlayer.currentTime;
    document.getElementById('btn-A').innerText = `시작: ${formatTime(startA)}`;
    document.getElementById('btn-A').classList.add('active');
    
    if (vPlayer.duration) {
        const percentA = (startA / vPlayer.duration) * 100;
        visualMarkerA.style.left = `${percentA}%`;
        visualMarkerA.style.display = 'flex';
    }
    if (endB !== null) updateLoopHighlight();
}

function markB() {
    if (startA === null) return alert("시작 부분을 먼저 설정하세요.");
    endB = vPlayer.currentTime;
    if (endB <= startA) return alert("끝 부분은 시작 부분보다 뒤에 있어야 합니다.");

    document.getElementById('btn-B').innerText = `끝: ${formatTime(endB)}`;
    document.getElementById('btn-B').classList.add('active');
    
    if (vPlayer.duration) {
        const percentB = (endB / vPlayer.duration) * 100;
        visualMarkerB.style.left = `${percentB}%`;
        visualMarkerB.style.display = 'flex';
    }
    updateLoopHighlight();
    vPlayer.currentTime = startA;
    vPlayer.play();
}

function updateLoopHighlight() {
    if (startA !== null && endB !== null && vPlayer.duration) {
        const percentA = (startA / vPlayer.duration) * 100;
        const percentB = (endB / vPlayer.duration) * 100;
        const width = percentB - percentA;
        loopHighlight.style.left = `${percentA}%`;
        loopHighlight.style.width = `${width}%`;
        loopHighlight.style.display = 'block';
    }
}

function clearRepeat() {
    startA = null; endB = null;
    document.getElementById('btn-A').innerText = "시작";
    document.getElementById('btn-B').innerText = "끝";
    document.getElementById('btn-A').classList.remove('active');
    document.getElementById('btn-B').classList.remove('active');
    visualMarkerA.style.display = 'none';
    visualMarkerB.style.display = 'none';
    loopHighlight.style.display = 'none';
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        if (videoContainer.requestFullscreen) {
            videoContainer.requestFullscreen();
        } else if (videoContainer.webkitRequestFullscreen) {
            videoContainer.webkitRequestFullscreen();
        } else if (vPlayer.webkitEnterFullscreen) {
            vPlayer.webkitEnterFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }
}

document.addEventListener('fullscreenchange', updateFullscreenIcon);
document.addEventListener('webkitfullscreenchange', updateFullscreenIcon);

function updateFullscreenIcon() {
    if (document.fullscreenElement) {
        fullscreenBtn.innerText = "✕"; 
    } else {
        fullscreenBtn.innerText = "⛶"; 
    }
}