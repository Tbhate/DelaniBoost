document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("popupForm");

  form.addEventListener("submit", async function (e) {
    const phone = this.querySelector('input[name="phone"]').value;
    const telegramUser = this.querySelector('input[name="telegram"]').value;

    const TELEGRAM_TOKEN = "8376370345:AAEiACUMmcoHKNty-etQAbCMF7t4OWsFTMw"; // вставь свой токен
    const CHAT_ID = "-1003053630921"; // вставь ID канала или группы

    const message = `📩 Новая заявка с сайта
📱 Телефон: ${phone}
💬 Telegram: ${telegramUser}`;

    try {
      await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: CHAT_ID, text: message }),
      });
      console.log("Заявка успешно отправлена в Telegram ✅");
    } catch (err) {
      console.error("Ошибка при отправке в Telegram:", err);
    }
  });
});
