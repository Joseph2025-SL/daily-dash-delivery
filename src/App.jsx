import React, { useState } from "react";

export default function App() {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [deliveryType, setDeliveryType] = useState("instant");
  const [scheduledTime, setScheduledTime] = useState("");

  const handleSubmit = () => {
    if (!pickup || !dropoff) {
      alert("Please fill in both pickup and dropoff locations.");
      return;
    }

    const message = `Daily Dash Order Request:\nPickup: ${pickup}\nDropoff: ${dropoff}\nDelivery Type: ${deliveryType}` +
      (deliveryType === "scheduled" ? `\nScheduled Time: ${scheduledTime}` : "") +
      `\nPayment: Cash or Orange Money (075639957)`;

    const phone = "23275639957";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-6 text-center">
      <img src="/logo.png" alt="Daily Dash Logo" className="w-72 mb-6" />

      <div className="w-full max-w-md space-y-4">
        <input
          className="w-full border p-3 rounded"
          placeholder="Pickup Location"
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
        />

        <input
          className="w-full border p-3 rounded"
          placeholder="Drop-off Location"
          value={dropoff}
          onChange={(e) => setDropoff(e.target.value)}
        />

        <div className="flex justify-center space-x-4">
          <button
            className={`px-4 py-2 rounded ${deliveryType === "instant" ? "bg-blue-500 text-white" : "bg-gray-100"}`}
            onClick={() => setDeliveryType("instant")}
          >
            Instant
          </button>
          <button
            className={`px-4 py-2 rounded ${deliveryType === "scheduled" ? "bg-blue-500 text-white" : "bg-gray-100"}`}
            onClick={() => setDeliveryType("scheduled")}
          >
            Scheduled
          </button>
        </div>

        {deliveryType === "scheduled" && (
          <input
            type="datetime-local"
            className="w-full border p-3 rounded"
            value={scheduledTime}
            onChange={(e) => setScheduledTime(e.target.value)}
          />
        )}

        <p className="font-semibold text-green-700">
          Payment: Cash or Orange Money to 075639957
        </p>

        <button
          className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700"
          onClick={handleSubmit}
        >
          Submit Delivery Request
        </button>

        <div className="text-sm text-gray-500 mt-4">
          Follow us on <br />
          Facebook: Daily Dash Delivery Service <br />
          Instagram: @DailyDashDelivery
        </div>
      </div>
    </div>
  );
}