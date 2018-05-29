const formUrl = (photoset_id, per_page) => `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=0c3f8d32a28de8434240115b85a28499&photoset_id=${photoset_id}&user_id=8994820%40N07&extras=tags&per_page=${per_page}&format=json&nojsoncallback=1`;

export default formUrl;