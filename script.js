document.addEventListener("DOMContentLoaded",()=>{
    const roles = ["Software Engineer", "MERN Stack Developer", "Full Stack Developer", "Web Developer"]
    const roleElemeent = document.getElementById("role")

    let roleIndex = 0;
    let letterIndex = 0;
    let typingInterval;

    function typeRole(){
        roleElemeent.style.opacity = 0;
        setTimeout(()=>{
            roleElemeent.textContent = "";
            letterIndex = 0;

            typingInterval = setInterval(()=>{
                if(letterIndex < roles[roleIndex].length){
                    roleElemeent.textContent += roles[roleIndex].charAt(letterIndex);
                    letterIndex++;
                }
                else{
                    clearInterval(typingInterval);
                    setTimeout(()=>{
                        roleIndex = (roleIndex + 1) % roles.length;
                        typeRole()
                    }, 1000)
                }
            }, 150);
            roleElemeent.style.opacity = 1;
        }, 500)
    }
    typeRole();
});

document.addEventListener("DOMContentLoaded", ()=>{
    const filterButtons = document.querySelectorAll(".projects-list li")
    const projects = document.querySelectorAll(".projects-box")

    filterButtons.forEach((button)=>{
        button.addEventListener("click", ()=>{
            
            filterButtons.forEach((btn)=>{
              btn.classList.remove("active")  
              button.classList.add("active")

              const filterValue = button.getAttribute("data-filter")

              projects.forEach((project)=>{
                if(filterValue === "all" || project.getAttribute("data-category") === filterValue){
                    project.style.display = "flex"
                }
                else{
                    project.style.display = "none"
                }
              })
            })
        })
    })
})

document.addEventListener("DOMContentLoaded", ()=>{
    const listItems = document.querySelectorAll('.profile-menu-icons li')

    listItems.forEach((li)=>{
        li.addEventListener("click", ()=>{
            listItems.forEach((item)=>{
                item.querySelector("i").style.color = "";
            });
            li.querySelector("i").style.color = "var(--secondary-color)"
        })
    })
})