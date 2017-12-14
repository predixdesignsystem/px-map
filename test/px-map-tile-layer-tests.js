describe('px-map-tile-layer', () => {
  it('decodes its `url` attribute if `decodeUrl` is enabled', () => {
    var encodedTileEl = fixture('TileLayerEncodedUrlFixture');

    flushAndRender(() => {
      var encodedUrl = encodedTileEl.url;
      var options = encodedTileEl.getInstOptions();
      expect(options.url).to.equal('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
    });
  });
});
