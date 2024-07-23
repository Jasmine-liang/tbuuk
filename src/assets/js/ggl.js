
export default function gglFn() {
    const canvas = document.getElementById('ggl');
    const ctx = canvas.getContext('2d');
    const container = document.getElementById('container');

    // 配置参数
    const brushSize = window.innerWidth * 0.05; // 设置笔刷大小
    const revealThreshold = 0.5; // 设定揭示比例阈值，0.5 表示 50%

    // 设置canvas大小与container一致
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;

    // 加载刮刮乐表层图片
    const coverImage = new Image();
    coverImage.src = '/image/page1-logo.png'; // 表层图片地址
    coverImage.onload = () => {
        ctx.drawImage(coverImage, 0, 0, canvas.width, canvas.height);
    };

    // 监听鼠标事件
    let isDrawing = false;

    function getMousePos(canvas, evt) {
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;

        return {
            x: (evt.clientX - rect.left) * scaleX,
            y: (evt.clientY - rect.top) * scaleY
        };
    }

    function startDrawing(evt) {
        isDrawing = true;
        draw(evt);
    }

    function endDrawing() {
        isDrawing = false;
        ctx.beginPath();
        checkReveal();
    }

    function draw(evt) {
        if (!isDrawing) return;

        const pos = getMousePos(canvas, evt);
        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, brushSize, 0, Math.PI * 2);
        ctx.fill();
    }

    function checkReveal() {
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const pixels = imageData.data;
        let transparentPixels = 0;

        for (let i = 3; i < pixels.length; i += 4) {
            if (pixels[i] === 0) {
                transparentPixels++;
            }
        }

        const revealRatio = transparentPixels / (canvas.width * canvas.height);
        if (revealRatio > revealThreshold) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mouseup', endDrawing);
    canvas.addEventListener('mousemove', draw);

    // 触摸事件
    canvas.addEventListener('touchstart', (evt) => startDrawing(evt.touches[0]));
    canvas.addEventListener('touchend', endDrawing);
    canvas.addEventListener('touchmove', (evt) => {
        draw(evt.touches[0]);
        evt.preventDefault();
    });
}