
        document.addEventListener("DOMContentLoaded", () => {
            const gallery = document.getElementById("gallery");
            const upload = document.getElementById("upload");
            
            upload.addEventListener("change", function(event) {
                const file = event.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        const imgContainer = document.createElement("div");
                        imgContainer.classList.add("img-container");
                        
                        const img = document.createElement("img");
                        img.src = e.target.result;
                        img.classList.add("gallery-img");
                        
                        const deleteBtn = document.createElement("button");
                        deleteBtn.textContent = "X";
                        deleteBtn.classList.add("delete-btn");
                        deleteBtn.addEventListener("click", () => {
                            imgContainer.remove();


                            
                        });
                        
                        imgContainer.appendChild(img);
                        imgContainer.appendChild(deleteBtn);
                        gallery.appendChild(imgContainer);
                    };
                    reader.readAsDataURL(file);
                }
            });

            document.querySelectorAll(".delete-btn").forEach(button => {
                button.addEventListener("click", function() {
                    this.parentElement.remove();
                });
            });
        });
    