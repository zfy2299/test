!function () {
  "use strict";
  var t = function (t, e) {
    var i = this, n = e || {}, o = n.density, r = n.depth, a = n.count, s = n.gravity, u = n.speed, A = n.color,
      f = n.opacity, d = n.snowflake;
    this.density = o || 1 / 100,
      this.depth = r || 80,
      this.count = a || 3e3,
      this.gravity = s || 3000,
      this.speed = u || 5e-6,
      this.color = A || [1, 1, 1],
      this.opacity = f || .2,
      this.snowflake = d || "data:image/png;base64,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", this.VERTEX_SOURCE = "\n      precision highp float;\n\n      attribute vec4 a_position;\n      attribute vec4 a_color;\n      attribute vec3 a_rotation;\n      attribute vec3 a_speed;\n      attribute float a_size;\n\n      uniform float u_time;\n      uniform mat4 u_projection;\n      uniform vec3 u_worldSize;\n      uniform float u_gravity;\n      uniform float u_wind;\n\n      varying vec4 v_color;\n      varying float v_rotation;\n\n      void main() {\n        v_color = a_color;\n        v_rotation = a_rotation.x + u_time * a_rotation.y;\n\n        vec3 pos = a_position.xyz;\n\n        pos.x = mod(pos.x + u_time + u_wind * a_speed.x, u_worldSize.x * 2.0) - u_worldSize.x;\n        pos.y = mod(pos.y - u_time * a_speed.y * u_gravity, u_worldSize.y * 2.0) - u_worldSize.y;\n\n        pos.x += sin(u_time * a_speed.z) * a_rotation.z;\n        pos.z += cos(u_time * a_speed.z) * a_rotation.z;\n\n        gl_Position = u_projection * vec4(pos.xyz, a_position.w);\n        gl_PointSize = (a_size / gl_Position.w) * 100.0;\n      }\n    ", this.FRAGMENT_SOURCE = "\n      precision highp float;\n\n      uniform sampler2D u_texture;\n\n      varying vec4 v_color;\n      varying float v_rotation;\n\n      void main() {\n        vec2 rotated = vec2(\n          cos(v_rotation) * (gl_PointCoord.x - 0.5) + sin(v_rotation) * (gl_PointCoord.y - 0.5) + 0.5,\n          cos(v_rotation) * (gl_PointCoord.y - 0.5) - sin(v_rotation) * (gl_PointCoord.x - 0.5) + 0.5\n        );\n\n        vec4 snowflake = texture2D(u_texture, rotated);\n\n        gl_FragColor = vec4(snowflake.rgb * v_color.xyz, snowflake.a * v_color.a);\n      }\n    ", this.INITIAL_BUFFERS = function () {
      return {
        position: {size: 3, value: []},
        color: {size: 4, value: []},
        size: {size: 1, value: []},
        rotation: {size: 3, value: []},
        speed: {size: 3, value: []}
      }
    }, this.INITIAL_UNIFORMS = function () {
      return {
        time: {type: "float", value: 0},
        worldSize: {type: "vec3", value: [0, 0, 0]},
        gravity: {type: "float", value: i.gravity},
        wind: {type: "float", value: 0},
        projection: {type: "mat4", value: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]}
      }
    }, this.UNIFORM_SETTERS = {
      int: "uniform1i",
      float: "uniform1f",
      vec2: "uniform2fv",
      vec3: "uniform3fv",
      vec4: "uniform4fv",
      mat2: "uniformMatrix2fv",
      mat3: "uniformMatrix3fv",
      mat4: "uniformMatrix4fv"
    }, this.CANVAS_STYLE = {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "transparent",
      "pointer-events": "none"
    }, this.CAMERA = {fov: 60, near: 1, far: 1e4, aspect: 1, z: 100}, this.WIND = {
      current: 0,
      force: .1,
      target: .1,
      min: .1,
      max: .25,
      easing: .005
    }, this.init(t)
  };
  t.prototype.init = function (t) {
    var e = this.initCanvas(), i = e.getContext("webgl", {antialias: !0});
    t.append(e), this.$canvas = e, this.gl = i, this.program = this.initProgram(), this.buffers = this.initBuffers(), this.uniforms = this.initUniforms(), this.texture = this.initTexture(), this.camera = this.initCamera(), this.wind = this.initWind(), this.resize = this.resize.bind(this), this.update = this.update.bind(this), window.addEventListener("resize", this.resize)
  }, t.prototype.initCanvas = function () {
    var t = document.createElement("canvas");
    return Object.assign(t.style, this.CANVAS_STYLE), t
  }, t.prototype.initCamera = function () {
    return Object.assign({}, this.CAMERA)
  }, t.prototype.initWind = function () {
    return Object.assign({}, this.WIND)
  }, t.prototype.initShader = function (t, e) {
    var i = this.gl, n = i.createShader(t);
    return i.shaderSource(n, e), i.compileShader(n), n
  }, t.prototype.initProgram = function () {
    var t = this.gl, e = this.initShader(t.VERTEX_SHADER, this.VERTEX_SOURCE),
      i = this.initShader(t.FRAGMENT_SHADER, this.FRAGMENT_SOURCE), n = t.createProgram();
    return t.attachShader(n, e), t.attachShader(n, i), t.linkProgram(n), t.useProgram(n), n
  }, t.prototype.initBuffers = function () {
    var t = this.gl, e = this.program, i = this.INITIAL_BUFFERS();
    return Object.entries(i).forEach((function (i) {
      var n = i[0], o = i[1];
      o.location = t.getAttribLocation(e, "a_" + n), o.ref = t.createBuffer(), t.bindBuffer(t.ARRAY_BUFFER, o.ref), t.enableVertexAttribArray(o.location), t.vertexAttribPointer(o.location, o.size, t.FLOAT, !1, 0, 0)
    })), i
  }, t.prototype.updateBuffers = function () {
    var t = this, e = (this.gl, this.buffers);
    Object.keys(e).forEach((function (e) {
      t.setBuffer(e)
    }))
  }, t.prototype.setBuffer = function (t, e) {
    var i = this.gl, n = this.buffers[t];
    n.value = new Float32Array(e || n.value), i.bindBuffer(i.ARRAY_BUFFER, n.ref), i.bufferData(i.ARRAY_BUFFER, n.value, i.STATIC_DRAW)
  }, t.prototype.initUniforms = function () {
    var t = this.gl, e = this.program, i = this.INITIAL_UNIFORMS();
    return Object.entries(i).forEach((function (i) {
      var n = i[0];
      i[1].location = t.getUniformLocation(e, "u_" + n)
    })), i
  }, t.prototype.updateUniforms = function () {
    var t = this, e = (this.gl, this.uniforms);
    Object.keys(e).forEach((function (e) {
      t.setUniform(e)
    }))
  }, t.prototype.setUniform = function (t, e) {
    var i = this.gl, n = this.uniforms[t], o = this.UNIFORM_SETTERS[n.type], r = /^mat[2-4]$/i.test(n.type);
    n.value = e || n.value, r ? i[o](n.location, !1, n.value) : i[o](n.location, n.value)
  }, t.prototype.initTexture = function () {
    var t = this.gl, e = t.createTexture(), i = new Image;
    return t.bindTexture(t.TEXTURE_2D, e), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 0])), i.onload = function () {
      t.bindTexture(t.TEXTURE_2D, e), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, i), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE)
    }, i.src = this.snowflake, e
  }, t.prototype.initSnowflakes = function (t, e, i) {
    for (var n = [], o = [], r = [], a = [], s = [], u = 1 / this.density, A = t / e * u, f = this.depth, d = t / e * this.count, h = 0; h < d; ++h) n.push(-A + Math.random() * A * 2, -u + Math.random() * u * 2, Math.random() * f * 2), s.push(1 + Math.random(), 1 + Math.random(), 10 * Math.random()), a.push(2 * Math.random() * Math.PI, 20 * Math.random(), 10 * Math.random()), o.push.apply(o, this.color.concat([.1 + Math.random() * this.opacity])), r.push(5 * Math.random() * 5 * e * i / 1e3);
    this.setUniform("worldSize", [A, u, f]), this.setBuffer("position", n), this.setBuffer("color", o), this.setBuffer("rotation", a), this.setBuffer("size", r), this.setBuffer("speed", s)
  }, t.prototype.setProjection = function (t) {
    var e = this.camera;
    e.aspect = t;
    var i = e.fov * Math.PI / 180, n = Math.tan(.5 * Math.PI - .5 * i), o = 1 / (e.near - e.far);
    return [n / e.aspect, 0, 0, 0, 0, n, 0, 0, 0, 0, (e.near + e.far) * o, -1, 0, 0, e.near * e.far * o * 2 + e.z, e.z]
  }, t.prototype.render = function () {
    var t = this.gl;
    return t.enable(t.BLEND), t.enable(t.CULL_FACE), t.blendFunc(t.SRC_ALPHA, t.ONE), t.disable(t.DEPTH_TEST), this.updateBuffers(), this.updateUniforms(), this.resize(!0), this.time = {
      start: window.performance.now(),
      previous: window.performance.now()
    }, this.raf && window.cancelAnimationFrame(this.raf), this.raf = window.requestAnimationFrame(this.update), this
  }, t.prototype.resize = function (t) {
    void 0 === t && (t = !1);
    var e = this.$canvas, i = this.gl, n = e.offsetWidth, o = e.offsetHeight, r = n / o, a = window.devicePixelRatio;
    e.width = n * a, e.height = o * a, i.viewport(0, 0, n * a, o * a), i.clearColor(0, 0, 0, 0), !0 === t && this.initSnowflakes(n, o, a), this.setUniform("projection", this.setProjection(r))
  }, t.prototype.update = function (t) {
    var e = this, i = e.gl, n = e.buffers, o = e.wind, r = (t - this.time.start) * this.speed,
      a = t - this.time.previous;
    i.clear(i.COLOR_BUFFER_BIT), i.drawArrays(i.POINTS, 0, n.position.value.length / n.position.size), Math.random() > .995 && (o.target = (o.min + Math.random() * (o.max - o.min)) * (Math.random() > .5 ? -1 : 1)), o.force += (o.target - o.force) * o.easing, o.current += o.force * (.2 * a), this.setUniform("wind", o.current), this.setUniform("time", r), this.time.previous = t, this.raf = window.requestAnimationFrame(this.update)
  }, document.addEventListener("DOMContentLoaded", (function () {
    window.snow = new t(document.body, window.snowConfig).render()
  }))
}();
