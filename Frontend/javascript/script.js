const URL = "http://localhost:3000";


$( document ).ready(function() {
    let button = document.getElementById('sendSite');
    button.addEventListener('click', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const imageUrl = document.getElementById('imageUrl').value;
        const siteDescription = document.getElementById('siteDescription').value;
        const req = $.post(`${URL}/sites`, {
            name: name,
            imageUrl: imageUrl,
            siteDescription: siteDescription
        }).then(()=> {
            alert("Site created!");
            window.location.href = "./index.html";
            window.location.reload();
        });
    });
    getSites();

});

const getSites = () => {
    $.get(`${URL}/sites/`, function( data ) {
        let sites = "";
        data.map((site) => {
            sites+= `<a href="site.html?id=${site._id}">${site.name}</a>`
        })
        $( ".nav" ).html( sites );
      });
}
