import { createCanvas, registerFont, loadImage } from 'canvas';
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create a canvas with the recommended OG image dimensions
const width = 1200;
const height = 630;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

// Create modern background
const createBackground = () => {
    // Create dark gradient background
    const bgGradient = ctx.createLinearGradient(0, 0, width, height);
    bgGradient.addColorStop(0, '#1a1a1a');
    bgGradient.addColorStop(1, '#2d2d2d');
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, width, height);

    // Add subtle grid pattern
    ctx.strokeStyle = 'rgba(124, 58, 237, 0.1)';
    ctx.lineWidth = 1;
    const gridSize = 50;
    for (let x = 0; x <= width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
    }
    for (let y = 0; y <= height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
    }

    // Add gradient overlay
    const overlay = ctx.createLinearGradient(0, 0, width, height);
    overlay.addColorStop(0, 'rgba(124, 58, 237, 0.15)');
    overlay.addColorStop(0.5, 'rgba(167, 139, 250, 0.1)');
    overlay.addColorStop(1, 'rgba(124, 58, 237, 0.15)');
    ctx.fillStyle = overlay;
    ctx.fillRect(0, 0, width, height);
};

// Create decorative elements
const createDecorations = () => {
    // Create glowing circles
    const circles = [
        { x: width * 0.1, y: height * 0.2, r: 100 },
        { x: width * 0.9, y: height * 0.8, r: 120 },
        { x: width * 0.8, y: height * 0.1, r: 80 }
    ];

    circles.forEach(({ x, y, r }) => {
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, r);
        gradient.addColorStop(0, 'rgba(124, 58, 237, 0.2)');
        gradient.addColorStop(0.5, 'rgba(124, 58, 237, 0.1)');
        gradient.addColorStop(1, 'rgba(124, 58, 237, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
    });

    // Add geometric shapes
    ctx.strokeStyle = 'rgba(167, 139, 250, 0.2)';
    ctx.lineWidth = 2;
    
    // Hexagon
    const drawHexagon = (centerX, centerY, size) => {
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
            const angle = (i * Math.PI) / 3;
            const x = centerX + size * Math.cos(angle);
            const y = centerY + size * Math.sin(angle);
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.stroke();
    };

    drawHexagon(width * 0.15, height * 0.75, 40);
    drawHexagon(width * 0.85, height * 0.25, 50);
};

// Add main content
const addContent = () => {
    // Add name with shadow effect
    ctx.shadowColor = 'rgba(124, 58, 237, 0.5)';
    ctx.shadowBlur = 20;
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 82px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Priyanshi Gupta', width/2, height/2 - 20);

    // Reset shadow for subtitle
    ctx.shadowBlur = 0;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.font = '42px Arial';
    ctx.fillText('Software Developer', width/2, height/2 + 40);

    // Add stylish underline
    const lineWidth = 200;
    const lineY = height/2 + 80;
    
    // Create gradient for line
    const lineGradient = ctx.createLinearGradient(
        width/2 - lineWidth, lineY,
        width/2 + lineWidth, lineY
    );
    lineGradient.addColorStop(0, 'rgba(124, 58, 237, 0)');
    lineGradient.addColorStop(0.5, 'rgba(124, 58, 237, 1)');
    lineGradient.addColorStop(1, 'rgba(124, 58, 237, 0)');

    ctx.strokeStyle = lineGradient;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(width/2 - lineWidth, lineY);
    ctx.lineTo(width/2 + lineWidth, lineY);
    ctx.stroke();
};

// Generate the image
const generateImage = () => {
    createBackground();
    createDecorations();
    addContent();

    // Save the image
    const buffer = canvas.toBuffer('image/png');
    writeFileSync(join(__dirname, '../public/og-image.png'), buffer);
    console.log('OG image generated successfully!');
};

generateImage();
