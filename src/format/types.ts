import { FormatOptions as DateFnsFormatOptions } from 'date-fns';

export type FormatOptions = DateFnsFormatOptions & {
  /**
   * フォーマット形式
   * https://date-fns.org/v2.29.3/docs/format
   */
  format?: string;

  /**
   * UTCの日時でフォーマットを行う
   */
  utc?: boolean;
};
