from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

TELEGRAM_TOKEN = "8197267629:AAEq60kiG_XDGf4nt7EI4SyHvaqG2B3Wcg0"
TELEGRAM_CHAT_ID = "546171826"

def send_to_telegram(data):
    message = (
        "📦 Новая заявка на доставку:\n\n"
        f"🏢 Юр. лицо: {data.get('isLegalEntity', 'нет')}\n"
        f"🛣️ Маршрут: {data.get('route', 'не указан')}\n"
        f"📅 Даты: {data.get('loadingDate', '?')} → {data.get('unloadingDate', '?')}\n"
        f"📦 Груз: {data.get('cargoDescription', 'не указан')}\n"
        f"📏 Габариты: {data.get('dimensions', 'не указаны')}\n"
        f"⚖️ Вес: {data.get('weight', '0')} кг\n"
        f"❗ Особые условия: {data.get('specialConditions', 'нет')}"
    )
    
    url = f"https://api.telegram.org/bot{TELEGRAM_TOKEN}/sendMessage"
    payload = {
        "chat_id": TELEGRAM_CHAT_ID,
        "text": message,
        "parse_mode": "Markdown"
    }
    
    response = requests.post(url, json=payload)
    return response.json()

@app.route('/api/delivery-request', methods=['POST'])
def handle_delivery_request():
    try:
        data = request.get_json()
        telegram_response = send_to_telegram(data)
        
        print("Telegram response:", telegram_response)  # Для отладки
        
        return jsonify({
            "status": "success",
            "message": "Заявка отправлена в Telegram"
        }), 200
        
    except Exception as e:
        print("Error:", str(e))
        return jsonify({
            "status": "error",
            "message": "Ошибка отправки"
        }), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)