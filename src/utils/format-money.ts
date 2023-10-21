type Currency = 'ETH'

type MoneyFormatOptions = {
  thousands: ',' | '.'
  decimal: number
}

export function formatMoney(
  cents: number | string,
  currency: Currency = 'ETH',
  options: MoneyFormatOptions = {
    decimal: 2,
    thousands: '.',
  }
) {
  if (!cents) return '0 ' + currency

  if (typeof cents === 'string') {
    cents = cents.replaceAll(',', '').replaceAll('.', '')
    cents = Number.parseInt(cents, 10)
  }

  function addThousands(moneyString: string) {
    return moneyString.replace(
      /(\d)(?=(\d\d\d)+(?!\d))/g,
      '$1' + options.thousands
    )
  }

  return addThousands(cents.toFixed(options.decimal)) + ' ' + currency
}
