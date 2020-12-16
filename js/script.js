jQuery(document).ready(function($){
    const request = axios.get('http://csc225.mockable.io/consoles');
    request.then(function(response){
        $('#loading').hide();
        console.log("response get");
        const platforms = response.data;
        /*const platformsHtml = platforms.map(function(platform){
            const {id, name: consoleName, image} = platform;
            return `
                <div>
                    <p class="m-0"
                </div>
            `;
        }).join('')*/
    });
    //$('#platforms').html(platformsHtml);
});