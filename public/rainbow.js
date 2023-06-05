cheet('↑ ↑ ↓ ↓ ← → ← → b a', async function () {
    if(confirm("WARNING:\nStrobing effects will appear, do you wish to proceed?")) {
        document.getElementById("rainbow").setAttribute("media", "all");
    }
});