import { IsMatchOptions } from 'date-fns';

export type ParseOptions = IsMatchOptions & {
  /**
   * パース元のフォーマット形式
   * https://date-fns.org/v2.29.3/docs/parse
   * 複数設定した場合は最初に一致したフォーマットでパースする
   */
  formats?: string | string[];

  /**
   * パース元に不足している情報の補完用日時
   * 未指定の場合はUTCの`1900-01-01 00:00:00.000`
   */
  referenceDate?: Date | number;

  /**
   * パース元をUTCの日時として扱う
   */
  utc?: boolean;
};
