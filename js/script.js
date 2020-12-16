jQuery(document).ready(function($){
    const request = axios.get('http://csc225.mockable.io/consoles');
    request.then(function(response){
        $('#page-loading').hide();
        const platforms = response.data;
        const platformsHtml = platforms.map(function(platform){
            const {id, name: platformName, image} = platform;
            return `
                <div class="col-lg-4 d-flex align-items-stretch">
                    <div class="card mb-4 shadow-sm">
                        <img src="${image}" class="img-fluid" alt="Responsive image">
                        <div class="card-body">
                            <h3><i class="text-muted">${platformName}</i></h3>
                            <p class="card-text" id="card-id-${id}"></p>
                            <a class="btn btn-primary" data-id="${id}">More Information</a>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    $('#platforms').html(platformsHtml);
    });

    jQuery('#platforms').on('click','.btn',function(){
        const id = $(this).attr('data-id');
        $('#info-loading').show();
        axios.get(`http://csc225.mockable.io/consoles/${id}`).then(function(info){
            $('#info-loading').hide();
            const{price,country,releaseYear} = info.data;
            $('#card-id-'+id).html(`
                Price of Console: $${price}<br>
                Country: ${country}<br>
                Release Year: ${releaseYear}<br>
            `);
        });
    });
});

    