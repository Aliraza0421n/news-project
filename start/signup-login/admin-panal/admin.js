//  function logout() {
//       window.location.href = "login.html";
//     }

function getit() {
    let title = document.getElementById("blog-title").value.trim();
    let desc = document.getElementById("blog-input").value.trim();
    let fileInput = document.getElementById("blog-image");

    if (!title || !desc || fileInput.files.length === 0) {
        alert("Please enter title, description, and select an image");
        return;
    }

    let reader = new FileReader();
    reader.onload = function(e) {
        let imageBase64 = e.target.result;

        let blogs = JSON.parse(localStorage.getItem("blogs")) || [];
        blogs.push({ title: title, desc: desc, image: imageBase64 });
        localStorage.setItem("blogs", JSON.stringify(blogs));

        window.open("../../../index.html", "_blank");
    };

    reader.readAsDataURL(fileInput.files[0]);
}




window.onload = function() {
    let blogs = JSON.parse(localStorage.getItem("blogs")) || [];

    if (blogs.length === 0) {
        document.getElementById("cards-container").innerHTML = "<p>No blogs found.</p>";
        return;
    }

    let html = "";
    blogs.forEach(blog => {
        html += `
             <div class="col-lg-3 col-md-4 col-sm-6 mb-3">
            <div class="card c-style">
              <img src="${blog.image}" class="card-img-top card-img-size" alt="Blog Image">
              <div class="card-body">
                <h5 class="card-title">${blog.title}</h5>
                <p class="card-text">${blog.desc}</p>
              </div>
            </div>
          </div>
        `;
    });

    document.getElementById("cards-container").innerHTML = html;
};

function sliderImages(){
    let images = document.getElementById("slider").value;
    window.localStorage.setItem(image,images)

    images.innerHTML +=`
    <div class="carousel-item active"data-bs-interval="1000">
      <img src="start/img/WIN_20241202_09_39_18_Pro.jpg" class="d-block w-100 s-crousal" alt="...">
    </div>
     <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
    `    
window.open("../../../index.html", "_blank");

}


    