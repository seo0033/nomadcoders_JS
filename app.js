const a = 5;
const b = 2;

const myName = "seo0";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);


const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"]

//배열 받기(확인)
console.log(daysOfWeek);

//배열이름[번호] / 번호: 0부터
console.log(daysOfWeek[2])

//배열 추가
daysOfWeek.push("sun");

console.log(daysOfWeek);

//Object(객체)
const player = {
    name: "seo0",
    points: 10,
    fat: true,
};

console.log(player);
console.log(player.name);

//Object에 property추가
player.color = "purple";

//property 업데이트
player.points = 15;

console.log(player)

