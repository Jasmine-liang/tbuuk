export default function game2() {
    $(document).one('click', '#game_start', function () {
        let max_idx = 8;
        let n = game.level + max_idx * 3;
        var idx = 0;
        var clearInter = setInterval(function () {
            if (n == 0) {
                game.gameOver();
                clearInterval(clearInter);
                return;
            }
            $('.scene .prize').removeClass('active');
            $('.scene .prize').eq(idx).addClass('active');
            idx++;
            if (idx == max_idx) {
                idx = 0;
            }
            n--;
        }, 200);
    });
}