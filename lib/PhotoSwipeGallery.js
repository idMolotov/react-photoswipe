"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _lodash = _interopRequireDefault(require("lodash.pick"));

var _PhotoSwipe = _interopRequireDefault(require("./PhotoSwipe.js"));

var _events = _interopRequireDefault(require("./events"));

var _excluded = ["id", "items", "thumbnailContent"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PhotoSwipeGallery = /*#__PURE__*/function (_React$Component) {
  _inherits(PhotoSwipeGallery, _React$Component);

  var _super = _createSuper(PhotoSwipeGallery);

  function PhotoSwipeGallery() {
    var _this;

    _classCallCheck(this, PhotoSwipeGallery);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isOpen: _this.props.isOpen,
      options: _this.props.options
    });

    _defineProperty(_assertThisInitialized(_this), "showPhotoSwipe", function (itemIndex) {
      return function (e) {
        e.preventDefault();

        var getThumbBoundsFn = function getThumbBoundsFn(index) {
          var thumbnail = _this.thumbnails[index];
          var img = thumbnail.getElementsByTagName('img')[0];
          var pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
          var rect = img.getBoundingClientRect();
          return {
            x: rect.left,
            y: rect.top + pageYScroll,
            w: rect.width
          };
        };

        var options = _this.state.options;
        options.index = itemIndex;
        options.getThumbBoundsFn = options.getThumbBoundsFn || getThumbBoundsFn;

        _this.setState({
          isOpen: true,
          options: options
        });
      };
    });

    _defineProperty(_assertThisInitialized(_this), "handleClose", function () {
      _this.setState({
        isOpen: false
      });

      _this.props.onClose();
    });

    return _this;
  }

  _createClass(PhotoSwipeGallery, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          id = _this$props.id,
          items = _this$props.items,
          thumbnailContent = _this$props.thumbnailContent,
          other = _objectWithoutProperties(_this$props, _excluded);

      var className = this.props.className;
      className = (0, _classnames.default)(['pswp-gallery', className]).trim();
      var eventProps = (0, _lodash.default)(other, _events.default);
      var _this$state = this.state,
          isOpen = _this$state.isOpen,
          options = _this$state.options;
      return /*#__PURE__*/_react.default.createElement("div", {
        id: id,
        className: className
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "pswp-thumbnails"
      }, items.map(function (item, index) {
        return /*#__PURE__*/_react.default.createElement("div", {
          key: index,
          ref: function ref(node) {
            _this2.thumbnails = _this2.thumbnails || [];
            _this2.thumbnails[index] = node;
          },
          className: "pswp-thumbnail",
          onClick: _this2.showPhotoSwipe(index)
        }, thumbnailContent(item));
      })), /*#__PURE__*/_react.default.createElement(_PhotoSwipe.default, _extends({}, eventProps, {
        isOpen: isOpen,
        items: items,
        options: options,
        onClose: this.handleClose
      })));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var isOpenChanged = props.isOpen !== state.isOpen;
      var index = state.options.index;
      var nextIndex = props.options.index;
      var isOptionIndexChanged = index !== nextIndex;

      if (isOptionIndexChanged || isOpenChanged) {
        return _objectSpread(_objectSpread({}, isOpenChanged ? {
          isOpen: props.isOpen
        } : {}), isOptionIndexChanged ? {
          options: props.options
        } : {});
      }

      return null;
    }
  }]);

  return PhotoSwipeGallery;
}(_react.default.Component);

_defineProperty(PhotoSwipeGallery, "propTypes", {
  items: _propTypes.default.array.isRequired,
  options: _propTypes.default.object,
  thumbnailContent: _propTypes.default.func,
  id: _propTypes.default.string,
  className: _propTypes.default.string,
  isOpen: _propTypes.default.bool,
  onClose: _propTypes.default.func
});

_defineProperty(PhotoSwipeGallery, "defaultProps", {
  options: {},
  thumbnailContent: function thumbnailContent(item) {
    return /*#__PURE__*/_react.default.createElement("img", {
      src: item.src,
      width: "100",
      height: "100",
      alt: ""
    });
  },
  id: '',
  className: '',
  isOpen: false,
  onClose: function onClose() {}
});

var _default = PhotoSwipeGallery;
exports.default = _default;