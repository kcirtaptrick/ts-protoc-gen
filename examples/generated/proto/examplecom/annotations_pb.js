// source: proto/examplecom/annotations.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.examplecom.AnnotatedMessage', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.examplecom.AnnotatedMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.examplecom.AnnotatedMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.examplecom.AnnotatedMessage.displayName = 'proto.examplecom.AnnotatedMessage';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.examplecom.AnnotatedMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.examplecom.AnnotatedMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.examplecom.AnnotatedMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.examplecom.AnnotatedMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    myunit64: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    myint64: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    myfixed64: jspb.Message.getFieldWithDefault(msg, 3, "0"),
    mysint64: jspb.Message.getFieldWithDefault(msg, 4, "0"),
    mysfixed64: jspb.Message.getFieldWithDefault(msg, 5, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.examplecom.AnnotatedMessage}
 */
proto.examplecom.AnnotatedMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.examplecom.AnnotatedMessage;
  return proto.examplecom.AnnotatedMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.examplecom.AnnotatedMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.examplecom.AnnotatedMessage}
 */
proto.examplecom.AnnotatedMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setMyunit64(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setMyint64(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readFixed64String());
      msg.setMyfixed64(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readSint64String());
      msg.setMysint64(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readSfixed64String());
      msg.setMysfixed64(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.examplecom.AnnotatedMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.examplecom.AnnotatedMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.examplecom.AnnotatedMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.examplecom.AnnotatedMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMyunit64();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
  f = message.getMyint64();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      2,
      f
    );
  }
  f = message.getMyfixed64();
  if (parseInt(f, 10) !== 0) {
    writer.writeFixed64String(
      3,
      f
    );
  }
  f = message.getMysint64();
  if (parseInt(f, 10) !== 0) {
    writer.writeSint64String(
      4,
      f
    );
  }
  f = message.getMysfixed64();
  if (parseInt(f, 10) !== 0) {
    writer.writeSfixed64String(
      5,
      f
    );
  }
};


/**
 * optional uint64 myUnit64 = 1;
 * @return {string}
 */
proto.examplecom.AnnotatedMessage.prototype.getMyunit64 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.examplecom.AnnotatedMessage} returns this
 */
proto.examplecom.AnnotatedMessage.prototype.setMyunit64 = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional int64 myInt64 = 2;
 * @return {string}
 */
proto.examplecom.AnnotatedMessage.prototype.getMyint64 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.examplecom.AnnotatedMessage} returns this
 */
proto.examplecom.AnnotatedMessage.prototype.setMyint64 = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional fixed64 myFixed64 = 3;
 * @return {string}
 */
proto.examplecom.AnnotatedMessage.prototype.getMyfixed64 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, "0"));
};


/**
 * @param {string} value
 * @return {!proto.examplecom.AnnotatedMessage} returns this
 */
proto.examplecom.AnnotatedMessage.prototype.setMyfixed64 = function(value) {
  return jspb.Message.setProto3StringIntField(this, 3, value);
};


/**
 * optional sint64 mySint64 = 4;
 * @return {string}
 */
proto.examplecom.AnnotatedMessage.prototype.getMysint64 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, "0"));
};


/**
 * @param {string} value
 * @return {!proto.examplecom.AnnotatedMessage} returns this
 */
proto.examplecom.AnnotatedMessage.prototype.setMysint64 = function(value) {
  return jspb.Message.setProto3StringIntField(this, 4, value);
};


/**
 * optional sfixed64 mySfixed64 = 5;
 * @return {string}
 */
proto.examplecom.AnnotatedMessage.prototype.getMysfixed64 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, "0"));
};


/**
 * @param {string} value
 * @return {!proto.examplecom.AnnotatedMessage} returns this
 */
proto.examplecom.AnnotatedMessage.prototype.setMysfixed64 = function(value) {
  return jspb.Message.setProto3StringIntField(this, 5, value);
};


goog.object.extend(exports, proto.examplecom);
