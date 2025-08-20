from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from datetime import datetime

app = FastAPI()

# Настройки CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/api/delivery-requests")
async def create_delivery_request(request: Request):
    data = await request.json()
    print(f"Received delivery request at {datetime.now()}:")
    print(data)
    
    
    return {
        "status": "success",
        "message": "Ваша заявка принята в работу, скоро с Вами свяжутся"
    }

@app.post("/api/privetik")
async def print_privetik():
    print('Privetik')  # Печатаем в консоль сервера
    return {"message": "Privetik printed to console"}  # Возвращаем ответ клиенту

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)