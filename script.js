// Configuration
const rewards = [
    { label: '20% OFF', color: '#FF6B6B', emoji: '🎉' },
    { label: 'FREE ITEM', color: '#4ECDC4', emoji: '🎁' },
    { label: '50% OFF', color: '#45B7D1', emoji: '🌟' },
    { label: 'TRY AGAIN', color: '#FFA07A', emoji: '😅' },
    { label: '30% OFF', color: '#98D8C8', emoji: '💚' },
    { label: 'BONUS POINTS', color: '#F7DC6F', emoji: '⭐' },
    { label: '15% OFF', color: '#BB8FCE', emoji: '💜' },
    { label: 'FREE COUPON', color: '#85C1E2', emoji: '🎊' }
];

let isSpinning = false;
let currentRotation = 0;

// Initialize canvas
const canvas = document.getElementById('wheelCanvas');
const ctx = canvas.getContext('2d');
const spinButton = document.getElementById('spinButton');
const resultText = document.getElementById('result');

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 200;

// Draw the wheel
function drawWheel(rotation = 0) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate((rotation * Math.PI) / 180);
    
    const sliceAngle = 360 / rewards.length;
    
    rewards.forEach((reward, index) => {
        const startAngle = (index * sliceAngle * Math.PI) / 180;
        const endAngle = ((index + 1) * sliceAngle * Math.PI) / 180;
        
        // Draw slice
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, radius, startAngle, endAngle);
        ctx.closePath();
        ctx.fillStyle = reward.color;
        ctx.fill();
        
        // Draw border
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 3;
        ctx.stroke();
        
        // Draw text
        ctx.save();
        ctx.rotate(startAngle + (endAngle - startAngle) / 2);
        ctx.textAlign = 'right';
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 14px Arial';
        ctx.fillText(reward.label, radius - 30, 10);
        ctx.fillStyle = '#000';
        ctx.font = 'bold 20px Arial';
        ctx.fillText(reward.emoji, radius - 50, 15);
        ctx.restore();
    });
    
    ctx.restore();
    
    // Draw center circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, 20, 0, Math.PI * 2);
    ctx.fillStyle = '#fff';
    ctx.fill();
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 3;
    ctx.stroke();
}

// Spin the wheel
function spin() {
    if (isSpinning) return;
    
    isSpinning = true;
    spinButton.disabled = true;
    resultText.textContent = '';
    
    // Random number of rotations + random final angle
    const extraRotations = Math.floor(Math.random() * 5) + 5;
    const randomAngle = Math.random() * 360;
    const finalRotation = currentRotation + (extraRotations * 360) + randomAngle;
    
    // Animate the spin
    let startTime = null;
    const duration = 4000; // 4 seconds
    
    function animate(currentTime) {
        if (startTime === null) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function (ease-out cubic)
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        
        const currentRotationAngle = currentRotation + (finalRotation - currentRotation) * easeProgress;
        drawWheel(currentRotationAngle);
        
        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            currentRotation = finalRotation % 360;
            showResult();
            isSpinning = false;
            spinButton.disabled = false;
        }
    }
    
    requestAnimationFrame(animate);
}

// Show the result
function showResult() {
    // Calculate which reward won
    const normalizedRotation = (360 - (currentRotation % 360)) % 360;
    const sliceAngle = 360 / rewards.length;
    const winningIndex = Math.floor(normalizedRotation / sliceAngle) % rewards.length;
    const winner = rewards[winningIndex];
    
    resultText.textContent = `🎉 You Won: ${winner.emoji} ${winner.label}!`;
}

// Event listener
spinButton.addEventListener('click', spin);

// Initial draw
drawWheel();

// Responsive design
window.addEventListener('resize', () => {
    // Optional: adjust canvas size on resize
    drawWheel(currentRotation);
});

// Touch support
let touchStartX = 0;
let touchStartY = 0;

canvas.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
});

canvas.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    
    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;
    
    if (Math.abs(deltaX) > 50 || Math.abs(deltaY) > 50) {
        spin();
    }
});
