      var center = new google.maps.LatLng(31.3290541,119.604047);

      var neighborhoods = [
      new google.maps.LatLng(31.2303904, 121.4737021),
      new google.maps.LatLng(32.060255, 118.796877)
      ];

      let users = [
      {name: '马家峰', city: '118 Zhou Kang Lu, Pudong, Shanghai, China', icon: '/icon/jeremy.jpg'},
      {name: '张超', city: 'Nanjing,China', icon: '/icon/zhangchao.jpg'},
      {name: '杨磊磊', city: 'Huaqiao, Kunshan, China', icon: '/icon/yangleilei.jpg'},
      {name: '倪晶晶', city: 'Hongkou, Shanghai,China', icon: '/icon/nijingjing.jpg'},
      {name: '朱成亮', city: 'Kang Hong Lu, Pudong, Shanghai,China', icon: '/icon/zhuchengliang.jpg'},
      {name: '李玉洁', city: 'Tianjiaan, Huainan,China', icon: '/icon/liyujie.jpg'},
      {name: '金钱富', city: 'Jinhua, Zhejiang,China', icon: '/icon/jinqianfu.jpg'},
      {name: '丁家飞', city: 'Nanjing,China', icon: '/icon/dingjiafei.jpg'},
      {name: '高魁', city: 'Huainan,China', icon: '/icon/gaokui.jpg'},
      {name: '于奇威', city: 'Huangshan  road,Hefei,China', icon: '/icon/yuqiwei.jpg'},
      {name: '任晨', city: 'Shanxi,China', icon: '/icon/renchen.jpg'},
      {name: '严远亭', city: 'Anhui University,Hefei,China', icon: '/icon/yanyuanting.jpg'}
      ];

      var map;

      var geocoder = new google.maps.Geocoder();

      function initialize() {
            var mapOptions = {
                  zoom: 8,
                  center: center,
                  scrollwheel: true
            };
            map = new google.maps.Map(document.getElementById('map-canvas'),
                  mapOptions);

            drop();
      }

      function drop() {
            for (var i = 0; i < users.length; i++) {
                  (function(index) {
                        setTimeout(function() {
                              addMarkerFromUser(users[index]);
                        }, i * 200)                        
                  })(i);
            }
      }

      function addMarkerFromUser(user) {
            geocoder.geocode({'address': user.city}, function(results, status) {
                if (status === 'OK') {
                  var marker = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location,
                    animation: google.maps.Animation.DROP,
                    icon: user.icon
              });
            } else {
                  alert('Geocode was not successful for the following reason: ' + status);
            }
      });
      }

      google.maps.event.addDomListener(window, 'load', initialize);