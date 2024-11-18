class NotFoundError extends Error {
  constructor(message?: string) {
    super(message || 'Data not found.');
    this.name = 'NotFoundError';
  }
}

class InvalidArgumentError extends Error {
  constructor(message?: string) {
    super(message || 'Invalid argument.');
    this.name = 'InvalidArgumentError';
  }
}

class NetworkError extends Error {
  constructor(message?: string) {
    super(message || 'Network request failed.');
    this.name = 'NetworkError';
  }
}

export { NotFoundError, InvalidArgumentError, NetworkError };
