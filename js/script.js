jQuery(document).ready(function($){
    const request = axios.get('http://csc225.mockable.io/consoles');
    request.then(function(response){
        $('#loading').hide();
        const platforms = response.data;
        const platformsHtml = platforms.map(function(platform){
            const {id, name: platformName, image} = platform;
            return `
                <div class="col-lg-4 d-flex align-items-stretch">
                    <div class="card mb-4 shadow-sm" data-id=${id}>
                        <img src="${image}" class="img-fluid" alt="Responsive image">
                        <div class="card-body">
                            <h3><i class="text-muted">${platformName}</i></h3>
                            <p class="card-text"></p>
                            <a class="btn btn-primary">More Information</a>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    $('#platforms').html(platformsHtml);
    });
});

    