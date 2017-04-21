const model = {
    "coin" : document.getElementById('coin'),
    "outCome" : document.getElementById('outCome'),
    "heads" : document.getElementById('heads'),
    "tails" : document.getElementById('tails'),
}

const operator = {
    "headsScore" : 0,
    "tailsScore" : 0,

    "setUpScores" : function() {
        model.heads.textContent = this.headsScore;
        model.tails.textContent = this.tailsScore;
    },

    "checkFlip" : function() {
        var outcome = Math.random();
        var outcomeText = "";
        console.log(outcome);
        if (outcome < 0.5) {
            this.headsScore++;
            outcomeText = "heads";
            view.flipCoin(model.coin, model.outCome, outcomeText);

            console.log('heads score ', this.headsScore);
        } else {
            this.tailsScore++;
            outcomeText = "tailss";
            view.flipCoin(model.coin, model.outCome, outcomeText);

            console.log('tails score ', this.tailsScore);
        }
        this.setUpScores();
    },
    "evemtListeners" : function() {
        const btn = document.getElementById('toss');
        btn.addEventListener('click', function() {
            view.clearFlip(model.coin, model.outCome);
        });
    }
}

view = {
    "initDisplay" : function() {
        operator.evemtListeners();
        operator.setUpScores();
    },
    "flipCoin" : function(x, y, z) {
        x.style.transform = "rotateY(1440deg)";
        y.innerHTML = z;
    },
    "clearFlip" : function(x, y) {
        x.style.transform = "rotateY(89deg)";
        y.innerHTML = "";
        operator.checkFlip();
    }
}
view.initDisplay();




// coin.style.transform = 'rotateY(1440deg)';