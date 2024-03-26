/**
 * Error codes that can be returned by the API
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
 */
export const _ERRORCODESMESSAGES = {
    200: 'The request was successful',
    201: 'The request was successful and a resource was created',
    202: 'The request was accepted for processing, but the processing has not been completed',
    203: 'The request was successful but the enclosed payload has been modified from that of the origin server\'s 200 (OK) response by a transforming proxy',
    204: 'The server successfully processed the request and is not returning any content',
    205: 'The server successfully processed the request, but is not returning any content',
    206: 'The server is delivering only part of the resource due to a range header sent by the client',
    207: 'The server is delivering only part of the resource due to a multipart message being required',
    208: 'The message body that follows is an XML message and can contain some of the HTTP headers that are normally found in the message',
    226: 'The request was successful and the response body contains the results of one or more instance-manipulations applied to the current instance',
    300: 'The request has more than one possible response. The user-agent or user should choose one of them',
    301: 'The URL of the requested resource has been changed permanently',
    302: 'The URL of the requested resource has been changed temporarily',
    303: 'The URL of the requested resource can be found under a different URI',
    304: 'The requested resource is available only through a proxy, whose address is provided in the response',
    305: 'The request must be accessed through the proxy given by the location field',
    306: 'No longer used',
    307: 'The requested resource resides temporarily under a different URI',
    308: 'The request and all future requests should be repeated using another URI',
    400: 'The request could not be understood by the server due to malformed syntax',
    401: 'You are not authorized to access the requested resource',
    402: 'Payment is required to access the requested resource',
    403: 'You are not authorized to perform this operation',
    404: 'The requested resource could not be found',
    405: 'The method specified in the request is not allowed for the resource identified by the request URI',
    406: 'The resource identified by the request is only capable of generating response entities that have content characteristics not acceptable according to the accept headers sent in the request',
    407: 'Proxy authentication required',
    408: 'The server did not receive a complete request message within the time that it was prepared to wait',
    409: 'The request could not be completed due to a conflict with the current state of the resource',
    410: 'The requested resource is no longer available at the server and no forwarding address is known',
    411: 'The server refuses to accept the request without a defined content length',
    412: 'The precondition given in one or more of the request header fields evaluated to false when it was tested on the server',
    413: 'The server is refusing to process a request because the request payload is larger than the server is willing or able to process',
    414: 'The server is refusing to service the request because the request-target is longer than the server is willing to interpret',
    415: 'The server is refusing to service the request because the entity of the request is in a format not supported by the requested resource for the requested method',
    416: 'The server cannot service the request because the request payload is in a format not supported by the requested resource for the requested method',
    417: 'The expectation given in the request\'s Expect header field could not be met by at least one of the inbound servers',
    418: 'I\'m a teapot',
    421: 'The request was directed at a server that is not able to produce a response',
    422: 'The request was well-formed but was unable to be followed due to semantic errors',
    423: 'The resource that is being accessed is locked',
    424: 'The request failed due to failure of a previous request',
    500: 'The server encountered an unexpected error that prevented it from completing the request',
    501: 'The server does not support the functionality required to fulfill the request',
    502: 'The server, while acting as a gateway or proxy, received an invalid response from an inbound server it accessed while attempting to fulfill the request',
    503: 'The server is currently unable to handle the request',
    504: 'The server, while acting as a gateway or proxy, did not receive a timely response from an upstream server it needed to access in order to complete the request',
    505: 'The server does not support, or refuses to support, the major version of HTTP that was used in the request message',
    506: 'The server has an internal configuration error',
    507: 'The server is out of space',
    508: 'The server detected an infinite loop while processing the request',
    509: 'The server reached the maximum number of simultaneous requests',
    510: 'The server does not support the functionality required to fulfill the request',
    511: 'You must authenticate to gain network access',
    1000: 'An error has occurred. Please contact support',
    1001: "The was an error processing your request"
} as const;