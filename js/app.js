// function
function show({ message = "", type = "h1", duration = 3000 }) {
    const main = document.getElementById("show");
    if (main) {
        const show = document.createElement("div");

        // Auto remove show
        const autoRemoveId = setTimeout(function () {
            main.removeChild(show);
        }, duration + 1000);

        const icons = {
            h1: "img/dog.gif",
            h2: "img/gap_nhau.gif",
            h3: "img/mung.gif",
            h4: "img/buon.gif",
            h5: "img/nhay.gif",
        };
        const icon = icons[type];
        show.innerHTML = `
                <div class="show-box">
                    <div class="show-gif">
                        <img src="${icon}" alt="">
                    </div>
                    <div class="show-body">
                        <p class="show-text">${message}</p>
                    </div>
                </div>
                                    `;
        main.appendChild(show);
    }
}

function show2() {
    const main = document.getElementById("show");
    if (main) {
        const show = document.createElement("div");
        console.log(show)
        show.innerHTML = `
            <div class="show-box">
                <div class="show-gif">
                    <img id="show-img1" src="img/bantim.gif" alt="">
                    <img id="show-img2" src="img/so.gif" alt="">
                </div>
                <div class="show-body">
                    <p class="show-text"><span style = "color: red;">Anh thích em </span><br>
                    Em có muốn làm người yêu của anh không</p>
                </div>
                <div class="show-button">
                    <a href="heart.html"><button id="yes">Có ạ</button></a>
                    <button id="no" onmouseenter="buttonNo();">Không</button>
                </div>
            </div>
    `;
        main.appendChild(show);
    }
}

function showH1() {
    show({
        message: "Chào em.",
        type: "h1",
        duration: 2000,
    });
    setTimeout(function () {
        showH2();
    }, 3000);
}

function showH2() {
    show({
        message: "Kể từ khi có duyên gặp gỡ.",
        type: "h2",
        duration: 2000
    });
    setTimeout(function () {
        showH3();
    }, 3000);
}

function showH3() {
    show({
        message: "Anh đã luôn mến em.",
        type: "h3",
        duration: 2000
    });
    setTimeout(function () {
        showH4();
    }, 3000);
}

function showH4() {
    show({
        message: "Dù cho em có không quan tâm anh.",
        type: "h4",
        duration: 2000
    });
    setTimeout(function () {
        showH5();
    }, 3000);
}

function showH5() {
    show({
        message: "Anh vẫn muốn nói với em một điều.",
        type: "h5",
        duration: 2000
    });
    setTimeout(function () {
        show2();
    }, 3000);
}

showH1();


function buttonNo() {
    const main = document.getElementById("no");
    const img1 = document.getElementById("show-img1");
    const img2 = document.getElementById("show-img2");
    const ft = true;
    if (ft) {
        img1.style.display = "none";
        img2.style.display = "block";
    } else {
        img1.style.display = "block";
        img2.style.display = "none";
    }
    // move random button 
    function moveButton() {
        if (screen.width <= 600) {
            var x = Math.random() * 300;
            var y = Math.random() * 300;
        } else {
            var x = Math.random() * 500;
            var y = Math.random() * 500;
        }
        var left_x = x + "px";
        var top_y = y + "px";

        main.style.left = left_x;
        main.style.top = top_y;


    }

    moveButton();
}
