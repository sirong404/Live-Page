async function predictWicket() {
    const url = "https://cricket-wicket-prediction-api.onrender.com/predict_wicket"; // Replace with your actual API URL

    const data = {
        venue: document.getElementById("venue").value,
        batting_team: document.getElementById("batting_team").value,
        batter: document.getElementById("batter").value,
        bowler: document.getElementById("bowler").value,
        non_striker: document.getElementById("non_striker").value,
        runs_batter: parseInt(document.getElementById("runs_batter").value),
        runs_total: parseInt(document.getElementById("runs_total").value),
        extras: parseInt(document.getElementById("extras").value),
        over_number: parseInt(document.getElementById("over_number").value),
        delivery_number: parseInt(document.getElementById("delivery_number").value),
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        document.getElementById("result").innerText = 
            `Wicket Prediction: ${result.wicket_prediction}, Probability: ${result.wicket_probability}%`;
    } catch (error) {
        console.error("Error:", error);
        document.getElementById("result").innerText = "Failed to get prediction. Check API.";
    }
}
