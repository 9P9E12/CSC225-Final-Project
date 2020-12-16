jQuery(document).ready(function($){
    const request = axios.get('http://csc225.mockable.io/consoles');
    request.then(function(response){
        const consoles = response.data;
        const consolesHtml = consoles.map(function(console){
            const {id, name: consoleName, image} = console;
            return `
                
            `;
        }).join('')
    });
    console.log('after the request');
});