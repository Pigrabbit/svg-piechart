const $pieChart = document.querySelector("svg.pie-chart");
const $pies = [...document.querySelectorAll("circle.target")];

const radius = 10;
const circumference = 62.83 // 2 * pi * r

const data = {
    life: 71,
    grocery: 16,
    transportation: 4,
}

const percentages = Object.values(data)
    .sort((a, b) => a - b) // 오름차순 정렬
    .map((num, idx, arr) => {
        // 자기 보다 뒤에 나오는 element 모두 sum
        return arr.slice(idx).reduce((acc, cur) => acc + cur)
    })

console.log(percentages);

$pies.forEach((pie, idx) => {
    pie.setAttribute("stroke-dasharray", `calc((${percentages[idx]}/100) * ${circumference}) ${circumference}`);
})
