const list = [
    {id: 1, name: '1元优惠券', is: true},
    {id: 2, name: '10元优惠券', is: true},
    {id: 3, name: '谢谢惠顾', is: true},
    {id: 4, name: '豪华电动车'},
    {id: 5, name: '1w购物券'},
    {id: 6, name: '5w购物券'},
    {id: 7, name: '豪华轿车'},
    {id: 8, name: '房子一套'},
    {id: 9, name: '顶配笔记本'}
].sort(v => Math.random() - 0.5);
const isArr = list.filter(v => v.is);
const noArr = list.filter(v => !v.is);
let count = 3;
const box = document.querySelector('.box');
const countEL = document.querySelector('#count');
countEL.innerHTML = count;
box.innerHTML = list.map(v => {
    return `<div class="item" onclick="fp(this)">
        <div class="style1">抽奖</div>
        <div class="style2"></div>
    </div>`
}).join('');
const fp = (me) => {
    if (count === 0) {
        return;
    }
    me.querySelector('.style1').classList.add('hide');
    setTimeout(() => {
        const item = isArr.pop();
        const style2 = me.querySelector('.style2');
        style2.innerHTML = item.name;
        style2.classList.add('show');
    }, 400);
    count--;
    countEL.innerHTML = count;
    if (count === 0) {
        setTimeout(() => {
            box.querySelectorAll('.style1').forEach(v => {
                v.classList.add('hide');
                if (v.nextElementSibling.className.indexOf('show') === -1) {
                    const item = noArr.pop();
                    v.nextElementSibling.innerHTML = item.name;
                }
            })
            setTimeout(() => {
                box.querySelectorAll('.style2').forEach(v => {
                    if (v.className.indexOf('show') === -1) {
                        v.classList.add('show-result');
                    }
                });
            }, 400);
        }, 1000);
    }
}