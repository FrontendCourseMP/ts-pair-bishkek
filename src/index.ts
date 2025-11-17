// Типы для валидации
type Hour = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23;

// Type guard для проверки часа
function isHour(value: number): value is Hour {
  return Number.isInteger(value) && value >= 0 && value <= 23;
}

// Type guard для проверки неотрицательного целого
function isNonNegativeInteger(value: number): boolean {
  return Number.isInteger(value) && value >= 0;
}

// Функция парсинга часа с типизацией
function parseHour(input: string): Hour | null {
  const parsed: number = Number.parseInt(input, 10);
  return isHour(parsed) ? parsed : null;
}

// Функция парсинга опоздания с типизацией
function parseDelay(input: string): number | null {
  const parsed: number = Number.parseInt(input, 10);
  return isNonNegativeInteger(parsed) ? parsed : null;
}

// Функция расчета времени прибытия с типизацией
function calculateArrivalTime(scheduled: Hour, delay: number): Hour {
  const result: number = (scheduled + delay) % 24;
  return result as Hour;
}

// Инициализация с явной типизацией
document.addEventListener("DOMContentLoaded", (): void => {
  const form: HTMLFormElement = document.getElementById("arrival-form") as HTMLFormElement;
  const scheduledInput: HTMLInputElement = document.getElementById("scheduledHour") as HTMLInputElement;
  const delayInput: HTMLInputElement = document.getElementById("delayHours") as HTMLInputElement;
  const output: HTMLOutputElement = document.getElementById("result") as HTMLOutputElement;

  form.addEventListener("submit", (e: SubmitEvent): void => {
    e.preventDefault();

    // Парсинг и проверка данных
    const scheduled: Hour | null = parseHour(scheduledInput.value);
    if (scheduled === null) {
      output.value = "Час должен быть целым числом от 0 до 23";
      return;
    }

    const delay: number | null = parseDelay(delayInput.value);
    if (delay === null) {
      output.value = "Опоздание должно быть целым числом ≥ 0";
      return;
    }

    // Расчет нового времени прибытия
    const result: Hour = calculateArrivalTime(scheduled, delay);
    output.value = `Новое время прибытия: ${result}:00`;
  });
});