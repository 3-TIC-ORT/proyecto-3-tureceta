
let activityButtons = document.querySelectorAll('.actividad-button');
        let activeButton = null;
        document.getElementById("nombre").textContent = JSON.parse(localStorage.getItem("user"));

        activityButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from previous button
                if (activeButton) {
                    activeButton.classList.remove('active');
                }

                // Add active class to the clicked button
                button.classList.add('active');

                // Update the active button
                activeButton = button;
            });
        });


        let ObjetivoButtons = document.querySelectorAll('.objetivo-button');
        let objetivoButton = null;

        ObjetivoButtons.forEach(button => {
            button.addEventListener('click', () => {
                if (objetivoButton) {
                   objetivoButton.classList.remove('active');
                }

            
                button.classList.add('active');
               objetivoButton = button;
            });
        });

