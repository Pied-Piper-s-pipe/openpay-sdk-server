export function decimalStringToHex(decimalString: string): string {
  const decimalNumber = parseInt(decimalString, 10);
  if (isNaN(decimalNumber)) {
    throw new Error('Invalid decimal string');
  }
  return `0x${decimalNumber.toString(16)}`;
}

export function isEmpty(value: string): boolean {
  return value === undefined || value === null || value.trim() === '';
}

export function transformTransactionType(from: string, owner: string) {
  if (from === owner) {
    return 1;
  }
  return 2;
}

export function transformStatus(status: string) {
  if (status === 'success') {
    return 1;
  } else if (status === 'pending') {
    return -1;
  }
  return 0;
}
