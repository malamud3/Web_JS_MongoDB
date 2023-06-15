const URL = "http://localhost:3000";

$( document ).ready(function() {
    getSites();
    const searchParams = new URLSearchParams(window.location.search)
    if(searchParams.has('id')) {
        const param = searchParams.get('id');
        getSiteData(param);
    } else {
        window.location.href = "/index.html";

    }

});

const getSiteData = (id) => {
    const req = $.get(`${URL}/sites/${id}`, function( data ) {
        let ret = "";
        ret = `<h1>${data.name}</h1>
        <p>
        ${data.siteDescription}
        </p>
        <div class="image">
                <img class="image" src="${data.imageUrl}">
                </div>
        <button onClick="deleteSite('${data._id}')">Remove Site</button>
        `
        $( "section" ).html( ret );
      });
      req.error(()=> {
        window.location.href = "./index.html";
      })
}

const deleteSite = (id) => {
    const ajaxReq = $.ajax( `${URL}/sites/${id}`, {
        type : 'DELETE'
        });
        ajaxReq.success(()=> {
            window.location.href = "/index.html";
            window.location.reload();
        });
   
}

const getSites = () => {
    $.get(`${URL}/sites/`, function( data ) {
        let sites = "";
        data.map((site) => {
            sites+= `<a href="site.html?id=${site._id}">${site.name}</a>`
        })
        $( ".nav" ).html( sites );
      });
}