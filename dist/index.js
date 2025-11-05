"use strict";
// Type guard для проверки часа
function isHour(value) {
    return Number.isInteger(value) && value >= 0 && value <= 23;
}
// Type guard для проверки неотрицательного целого
function isNonNegativeInteger(value) {
    return Number.isInteger(value) && value >= 0;
}
// Функция парсинга часа с типизацией
function parseHour(input) {
    const parsed = Number.parseInt(input, 10);
    return isHour(parsed) ? parsed : null;
}
// Функция парсинга опоздания с типизацией
function parseDelay(input) {
    const parsed = Number.parseInt(input, 10);
    return isNonNegativeInteger(parsed) ? parsed : null;
}
// Функция расчета времени прибытия с типизацией
function calculateArrivalTime(scheduled, delay) {
    const result = (scheduled + delay) % 24;
    return result;
}
// Инициализация с явной типизацией
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("arrival-form");
    const scheduledInput = document.getElementById("scheduledHour");
    const delayInput = document.getElementById("delayHours");
    const output = document.getElementById("result");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        // Парсинг и проверка данных
        const scheduled = parseHour(scheduledInput.value);
        if (scheduled === null) {
            output.value = "Час должен быть целым числом от 0 до 23";
            return;
        }
        const delay = parseDelay(delayInput.value);
        if (delay === null) {
            output.value = "Опоздание должно быть целым числом ≥ 0";
            return;
        }
        // Расчет нового времени прибытия
        const result = calculateArrivalTime(scheduled, delay);
        output.value = `Новое время прибытия: ${result}:00`;
    });
});
