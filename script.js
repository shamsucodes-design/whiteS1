// Product data
const products = [
    {
        id: 1,
        name: 'mangolien lace ',
        description: 'High-quality mangolien lace  for all your designs.',
        price: 299.99,
        image: './images/fabric.jpg'
    },
    {
        id: 2,
        name: 'Marbal Lace',
        description: 'Premium marbal lace for elegant garments and accents.',
        price: 19.99,
        image: './images/img2.jpg'
    },
    {
        id: 3,
        name: 'perdel lace',
        description: 'Beautiful perdel lace perfect for curtains and décor.',
        price: 24.99,
        image: './images/img1.jpg'
    },
    {
        id: 4,
        name: 'Pencil Lace',
        description: 'Delicate pencil lace with intricate detailing, perfect for trims and elegant overlays.',
        price: 9.99,
        image: './images/img1.jpg'
    },
    {
        id: 5,
        name: 'Stalion Lace',
        description: 'Elegant stalion lace with a refined texture ideal for formal wear and fashion accents.',
        price: 5.99,
        image: './images/img5.jpg'
    },
    {
        id: 6,
        name: 'Sterlyn Lace',
        description: 'Premium sterlyn lace with a soft shimmer, crafted for bridal and evening designs.',
        price: 29.99,
        image: './images/img6.jpg'
    },
    {
        id: 7,
        name: 'Cotton Lace',
        description: 'Soft cotton lace offering breathable comfort and classic style for everyday pieces.',
        price: 12.99,
        image: './images/img1.jpg'
    },
    {
        id: 8,
        name: 'Silk Lace',
        description: 'Luxurious silk lace with a smooth, flowing finish for elegant gowns and special occasions.',
        price: 45.99,
        image: './images/img9.jpg'
    },
    {
        id: 9,
        name: 'Wool Lace',
        description: 'Warm and durable wool fabric for winter clothing.',
        price: 35.99,
        image: './images/img10.jpg'
    },
    {
        id: 10,
        name: 'Linen Fabric',
        description: 'Breathable linen fabric perfect for summer wear.',
        price: 28.99,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2U4ZGNjMCIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQ2luemVsLCBzZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzJjMTgxMCI+TGluZW4gRmFicmljPC90ZXh0Pjwvc3ZnPg=='
    },
    {
        id: 11,
        name: 'Denim Fabric',
        description: 'Sturdy denim fabric for jeans and jackets.',
        price: 22.99,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y4ZjRmMCIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQ2luemVsLCBzZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzJjMTgxMCI+REVuaW0gRmFicmljPC90ZXh0Pjwvc3ZnPg=='
    },
    {
        id: 12,
        name: 'Lace Fabric',
        description: 'Delicate lace fabric for special occasions.',
        price: 18.99,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2U4ZGNjMCIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQ2luemVsLCBzZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzJjMTgxMCI+TGFjZSBGYWJyaWM8L3RleHQ+PC9zdmc+'
    },
    {
        id: 13,
        name: 'Velvet Fabric',
        description: 'Rich velvet fabric for luxurious garments.',
        price: 52.99,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y4ZjRmMCIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQ2luemVsLCBzZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzJjMTgxMCI+VmVsdmV0IEZhYnJpYzwvdGV4dD48L3N2Zz4='
    },
    {
        id: 14,
        name: 'Chiffon Fabric',
        description: 'Light and airy chiffon fabric for flowy dresses.',
        price: 16.99,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2U4ZGNjMCIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQ2luemVsLCBzZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzJjMTgxMCI+Q2hpZmZvbiBGYWJyaWM8L3RleHQ+PC9zdmc+'
    },
    {
        id: 15,
        name: 'Satin Fabric',
        description: 'Shiny satin fabric for elegant attire.',
        price: 32.99,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y4ZjRmMCIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQ2luemVsLCBzZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzJjMTgxMCI+U2F0aW4gRmFicmljPC90ZXh0Pjwvc3ZnPg=='
    },
    {
        id: 16,
        name: 'Canvas Fabric',
        description: 'Heavy-duty canvas fabric for bags and upholstery.',
        price: 25.99,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2U4ZGNjMCIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQ2luemVsLCBzZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzJjMTgxMCI+Q2FudmFzIEZhYnJpYzwvdGV4dD48L3N2Zz4='
    },
    {
        id: 17,
        name: 'Embroidery Hoop',
        description: 'Wooden embroidery hoop for hand stitching.',
        price: 8.99,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y4ZjRmMCIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQ2luemVsLCBzZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzJjMTgxMCI+RW1icm9pZGVyeSBIb29wPC90ZXh0Pjwvc3ZnPg=='
    },
    {
        id: 18,
        name: 'Sewing Pins',
        description: 'Stainless steel sewing pins for precise pinning.',
        price: 4.99,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2U4ZGNjMCIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQ2luemVsLCBzZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzJjMTgxMCI+U2V3aW5nIFBpbnM8L3RleHQ+PC9zdmc+'
    },
    {
        id: 19,
        name: 'Thimble',
        description: 'Protective thimble for finger safety while sewing.',
        price: 6.99,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y4ZjRmMCIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQ2luemVsLCBzZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzJjMTgxMCI+VGhpbWJsZTwvdGV4dD48L3N2Zz4='
    },
    {
        id: 20,
        name: 'Seam Ripper',
        description: 'Sharp tool for removing stitches.',
        price: 3.99,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2U4ZGNjMCIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQ2luemVsLCBzZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzJjMTgxMCI+U2VhbSBSaXBwZXI8L3RleHQ+PC9zdmc+'
    },
    {
        id: 21,
        name: 'Tailor\'s Chalk',
        description: 'Marking chalk for fabric patterns.',
        price: 5.49,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y4ZjRmMCIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQ2luemVsLCBzZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzJjMTgxMCI+VGFpbG9yJ3MgQ2hhbGs8L3RleHQ+PC9zdmc+'
    },
    {
        id: 22,
        name: 'Fabric Markers',
        description: 'Washable markers for temporary fabric marking.',
        price: 7.99,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2U4ZGNjMCIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQ2luemVsLCBzZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzJjMTgxMCI+RmFicmljIE1hcmtlcnM8L3RleHQ+PC9zdmc+'
    },
    {
        id: 23,
        name: 'Rotary Cutter',
        description: 'Precision rotary cutter for fabric cutting.',
        price: 14.99,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y4ZjRmMCIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQ2luemVsLCBzZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzJjMTgxMCI+Um90YXJ5IEN1dHRlcjwvdGV4dD48L3N2Zz4='
    },
    {
        id: 24,
        name: 'Cutting Mat',
        description: 'Self-healing cutting mat for protection.',
        price: 19.99,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2U4ZGNjMCIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQ2luemVsLCBzZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzJjMTgxMCI+Q3V0dGluZyBNYXQ8L3RleHQ+PC9zdmc+'
    },
    {
        id: 25,
        name: 'Iron',
        description: 'Steam iron for pressing fabrics.',
        price: 39.99,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y4ZjRmMCIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQ2luemVsLCBzZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzJjMTgxMCI+SXJvbjwvdGV4dD48L3N2Zz4='
    },
    {
        id: 26,
        name: 'Ironing Board',
        description: 'Foldable ironing board for home use.',
        price: 49.99,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2U4ZGNjMCIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQ2luemVsLCBzZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzJjMTgxMCI+SXJvbmluZyBCb2FyZDwvdGV4dD48L3N2Zz4='
    },
    {
        id: 27,
        name: 'Pressing Cloth',
        description: 'Protective cloth for ironing delicate fabrics.',
        price: 8.49,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y4ZjRmMCIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQ2luemVsLCBzZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzJjMTgxMCI+UHJlc3NpbmcgQ2xvdGg8L3RleHQ+PC9zdmc+'
    },
    {
        id: 28,
        name: 'Buttons Set',
        description: 'Assorted buttons for garment decoration.',
        price: 11.99,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2U4ZGNjMCIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQ2luemVsLCBzZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzJjMTgxMCI+QnV0dG9ucyBTZXQ8L3RleHQ+PC9zdmc+'
    },
    {
        id: 29,
        name: 'Zippers',
        description: 'Various sizes of zippers for closures.',
        price: 9.99,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y4ZjRmMCIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQ2luemVsLCBzZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzJjMTgxMCI+WmlwcGVyczwvdGV4dD48L3N2Zz4='
    },
    {
        id: 30,
        name: 'Ribbons',
        description: 'Decorative ribbons in various colors.',
        price: 6.99,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2U4ZGNjMCIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQ2luemVsLCBzZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzJjMTgxMCI+UmliYm9uczwvdGV4dD48L3N2Zz4='
    },
    {
        id: 31,
        name: 'Bias Tape',
        description: 'Bias tape for finishing edges.',
        price: 4.49,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y4ZjRmMCIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQ2luemVsLCBzZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzJjMTgxMCI+QmlhcyBUYXBlPC90ZXh0Pjwvc3ZnPg=='
    },
    {
        id: 32,
        name: 'Elastic Bands',
        description: 'Stretchy elastic for waistbands.',
        price: 5.99,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2U4ZGNjMCIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQ2luemVsLCBzZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzJjMTgxMCI+RWxhc3RpYyBCYW5kczwvdGV4dD48L3N2Zz4='
    },
    {
        id: 33,
        name: 'Hook and Eye',
        description: 'Fasteners for bras and garments.',
        price: 3.49,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y4ZjRmMCIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQ2luemVsLCBzZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzJjMTgxMCI+SG9vayBhbmQgRXllPC90ZXh0Pjwvc3ZnPg=='
    },
    {
        id: 34,
        name: 'Snaps',
        description: 'Plastic snaps for easy closures.',
        price: 7.99,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2U4ZGNjMCIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQ2luemVsLCBzZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzJjMTgxMCI+U25hcHM8L3RleHQ+PC9zdmc+'
    },
    {
        id: 35,
        name: 'Velcro',
        description: 'Hook-and-loop fasteners.',
        price: 8.99,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y4ZjRmMCIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQ2luemVsLCBzZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzJjMTgxMCI+VmVsY3JvPC90ZXh0Pjwvc3ZnPg=='
    },
    {
        id: 36,
        name: 'Tassels',
        description: 'Decorative tassels for embellishment.',
        price: 12.99,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2U4ZGNjMCIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQ2luemVsLCBzZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzJjMTgxMCI+VGFzc2VsczwvdGV4dD48L3N2Zz4='
    },
    {
        id: 37,
        name: 'Embroidery Thread',
        description: 'Colorful thread for embroidery work.',
        price: 13.99,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y4ZjRmMCIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQ2luemVsLCBzZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzJjMTgxMCI+RW1icm9pZGVyeSBUaHJlYWQ8L3RleHQ+PC9zdmc+'
    },
    {
        id: 38,
        name: 'Quilting Thread',
        description: 'Strong thread for quilting projects.',
        price: 11.49,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2U4ZGNjMCIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQ2luemVsLCBzZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzJjMTgxMCI+UXVpbHRpbmcgVGhyZWFkPC90ZXh0Pjwvc3ZnPg=='
    },
    {
        id: 39,
        name: 'Invisible Thread',
        description: 'Clear thread for invisible seams.',
        price: 6.49,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y4ZjRmMCIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQ2luemVsLCBzZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzJjMTgxMCI+SW52aXNpYmxlIFRocmVhZDwvdGV4dD48L3N2Zz4='
    },
    {
        id: 40,
        name: 'Metallic Thread',
        description: 'Shiny metallic thread for special effects.',
        price: 15.99,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2U4ZGNjMCIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQ2luemVsLCBzZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzJjMTgxMCI+TWV0YWxsaWMgVGhyZWFkPC90ZXh0Pjwvc3ZnPg=='
    },
    {
        id: 41,
        name: 'Glow-in-the-Dark Thread',
        description: 'Thread that glows in the dark.',
        price: 18.99,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y4ZjRmMCIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQ2luemVsLCBzZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzJjMTgxMCI+R2xvdy1pbi10aGUtRGFyayBUaHJlYWQ8L3RleHQ+PC9zdmc+'
    },
    {
        id: 42,
        name: 'Dress Patterns',
        description: 'Patterns for sewing dresses.',
        price: 14.99,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2U4ZGNjMCIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQ2luemVsLCBzZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzJjMTgxMCI+RHJlc3MgUGF0dGVybnM8L3RleHQ+PC9zdmc+'
    },
    {
        id: 43,
        name: 'Shirt Patterns',
        description: 'Patterns for sewing shirts.',
        price: 12.99,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y4ZjRmMCIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQ2luemVsLCBzZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzJjMTgxMCI+U2hpcnQgUGF0dGVybnM8L3RleHQ+PC9zdmc+'
    },
    {
        id: 44,
        name: 'Pants Patterns',
        description: 'Patterns for sewing pants.',
        price: 13.49,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2U4ZGNjMCIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQ2luemVsLCBzZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzJjMTgxMCI+UGFudHMgUGF0dGVybnM8L3RleHQ+PC9zdmc+'
    },
    {
        id: 45,
        name: 'Skirt Patterns',
        description: 'Patterns for sewing skirts.',
        price: 11.99,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y4ZjRmMCIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQ2luemVsLCBzZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzJjMTgxMCI+U2tpcnQgUGF0dGVybnM8L3RleHQ+PC9zdmc+'
    },
    {
        id: 46,
        name: 'Jacket Patterns',
        description: 'Patterns for sewing jackets.',
        price: 16.99,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2U4ZGNjMCIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQ2luemVsLCBzZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzJjMTgxMCI+SmFja2V0IFBhdHRlcm5zPC90ZXh0Pjwvc3ZnPg=='
    },
    {
        id: 47,
        name: 'Beginner Sewing Kit',
        description: 'Complete kit for beginners.',
        price: 29.99,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y4ZjRmMCIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQ2luemVsLCBzZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzJjMTgxMCI+QmVnaW5uZXIgU2V3aW5nIEtpdDwvdGV4dD48L3N2Zz4='
    },
    {
        id: 48,
        name: 'Embroidery Kit',
        description: 'Kit with everything for embroidery.',
        price: 34.99,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2U4ZGNjMCIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQ2luemVsLCBzZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzJjMTgxMCI+RW1icm9pZGVyeSBLaXQ8L3RleHQ+PC9zdmc+'
    },
    {
        id: 49,
        name: 'Quilting Kit',
        description: 'Kit for quilting projects.',
        price: 39.99,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y4ZjRmMCIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQ2luemVsLCBzZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzJjMTgxMCI+UXVpbHRpbmcgS2l0PC90ZXh0Pjwvc3ZnPg=='
    },
    {
        id: 50,
        name: 'Knitting Kit',
        description: 'Kit for knitting projects.',
        price: 24.99,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2U4ZGNjMCIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQ2luemVsLCBzZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzJjMTgxMCI+S25pdHRpbmcgS2l0PC90ZXh0Pjwvc3ZnPg=='
    },
    {
        id: 51,
        name: 'Crochet Kit',
        description: 'Kit for crochet projects.',
        price: 26.99,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y4ZjRmMCIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQ2luemVsLCBzZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzJjMTgxMCI+Q3JvY2hZXQgS2l0PC90ZXh0Pjwvc3ZnPg=='
    },
    {
        id: 52,
        name: 'Patchwork Kit',
        description: 'Kit for patchwork quilting.',
        price: 31.99,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2U4ZGNjMCIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQ2luemVsLCBzZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzJjMTgxMCI+UGF0Y2hZ29yayBLaXQ8L3RleHQ+PC9zdmc+'
    },
    {
        id: 53,
        name: 'Applique Kit',
        description: 'Kit for applique techniques.',
        price: 27.99,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y4ZjRmMCIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQ2luemVsLCBzZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzJjMTgxMCI+QXBwbGlxdWUgS2l0PC90ZXh0Pjwvc3ZnPg=='
    },
    {
        id: 54,
        name: 'Beading Kit',
        description: 'Kit for beading projects.',
        price: 19.99,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2U4ZGNjMCIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQ2luemVsLCBzZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzJjMTgxMCI+QmVhZGluZyBLaXQ8L3RleHQ+PC9zdmc+'
    },
    {
        id: 55,
        name: 'Leatherworking Kit',
        description: 'Kit for leather sewing projects.',
        price: 44.99,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y4ZjRmMCIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQ2luemVsLCBzZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzJjMTgxMCI+TGVhdGhlcndvcmtpbmcgS2l0PC90ZXh0Pjwvc3ZnPg=='
    },
    {
        id: 56,
        name: 'Upholstery Kit',
        description: 'Kit for upholstery projects.',
        price: 49.99,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2U4ZGNjMCIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQ2luemVsLCBzZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzJjMTgxMCI+VXBob2xzdGVyeSBLaXQ8L3RleHQ+PC9zdmc+'
    }
];

// Cart data
let cart = loadCart();

function loadCart() {
    try {
        const stored = JSON.parse(localStorage.getItem('cart'));
        if (!Array.isArray(stored)) return [];
        return stored.map(item => ({
            ...item,
            quantity: Number(item.quantity) || 1,
            price: Number(item.price) || 0
        }));
    } catch (error) {
        localStorage.removeItem('cart');
        return [];
    }
}

// DOM elements
const productGrid = document.getElementById('product-grid');
const cartLink = document.getElementById('cart-link');
const cartCount = document.getElementById('cart-count');
const cartSection = document.getElementById('cart');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const totalPrice = document.getElementById('total-price');
const checkoutBtn = document.getElementById('checkout-btn');
const closeCartBtn = document.getElementById('close-cart-btn');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const searchInput = document.getElementById('search-input');
const categoryFilter = document.getElementById('category-filter');

// Render products
function renderProducts() {
    productGrid.innerHTML = '';
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="price">$${product.price.toFixed(2)}</div>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        `;
        productGrid.appendChild(productElement);
    });
}

// Update cart count
function updateCartCount() {
    const itemCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    cartCount.textContent = itemCount;
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const cartItem = cart.find(item => item.id === productId);
        if (cartItem) {
            cartItem.quantity = (cartItem.quantity || 1) + 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        renderCart();
    }
}

// Render cart
function renderCart() {
    cartItems.innerHTML = '';
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty.</p>';
        cartTotal.style.display = 'none';
        return;
    }

    cartTotal.style.display = 'block';
    let total = 0;

    cart.forEach((item, index) => {
        const quantity = item.quantity || 1;
        const lineTotal = item.price * quantity;

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div>
                <h4>${item.name}</h4>
                <div class="price">$${item.price.toFixed(2)} x ${quantity}</div>
                <div class="line-total">Item total: $${lineTotal.toFixed(2)}</div>
            </div>
            <button class="remove-item" data-index="${index}">Remove</button>
        `;
        cartItems.appendChild(cartItem);
        total += lineTotal;
    });

    totalPrice.textContent = `$${total.toFixed(2)}`;
}

// Remove from cart
function removeFromCart(index) {
    const item = cart[index];
    if (!item) return;

    if ((item.quantity || 1) > 1) {
        item.quantity -= 1;
    } else {
        cart.splice(index, 1);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCart();
}

// Show cart
function showCart() {
    cartSection.classList.add('show');
}

// Hide cart
function hideCart() {
    cartSection.classList.remove('show');
}

// Toggle hamburger menu
function toggleMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

// Close menu when clicking on a link
function closeMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    const total = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
    const itemCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    alert(`Checkout successful! Total items: ${itemCount}, Total amount: $${total.toFixed(2)}`);
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCart();
    hideCart();
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartCount();
    renderCart();
});

productGrid.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart')) {
        const productId = parseInt(e.target.dataset.id);
        addToCart(productId);
    }
});

cartLink.addEventListener('click', (e) => {
    e.preventDefault();
    showCart();
});

cartItems.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-item')) {
        const index = parseInt(e.target.dataset.index);
        removeFromCart(index);
    }
});

checkoutBtn.addEventListener('click', checkout);
closeCartBtn.addEventListener('click', hideCart);

// Hamburger menu event listeners
hamburger.addEventListener('click', toggleMenu);

// Close menu when clicking on navigation links
navMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        closeMenu();
    }
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        closeMenu();
    }
});

// Contact form handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    // Basic form validation
    if (!name || !email || !subject || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Simulate form submission (in a real application, this would send to a server)
    alert(`Thank you for your message, ${name}! We will get back to you soon.`);

    // Reset form
    contactForm.reset();
});