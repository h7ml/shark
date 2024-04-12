import localforage from "localforage";

// docs: https://localforage.docschina.org/#api

/**
 * 本地存储数据
 * @interface IData - 存储的数据格式
 * @property {number | null} expires - 数据的过期时间戳，null 表示永不过期
 * @property {any} data - 要存储的数据
 */
interface IData {
  expires: number | null;
  data: any;
}

/**
 * 创建数据库实例
 * @param {string} name - 数据库的名称
 * @returns {LocalForage} - 数据库实例
 */
interface DropInstanceOptions {
  name?: string; // 数据库的名称
  storeName?: string; // 数据仓库的名称
}

/**
 * 提供对本地持久化数据的读取、设置和管理
 *
 */
class Storage {
  /**
   * 读取数据，读不到返回 null
   * @param {string} key - 要读取的数据的键名
   * @returns {Promise<any | null>} - 返回存储的数据，如果不存在则返回 null
   */
  static async get(key: string): Promise<any | null> {
    const result = await localforage.getItem<IData>(key);
    if (result === null) return null;

    if (result.expires && result.expires < Date.now()) {
      // 过期
      await Storage.remove(key);
      return null;
    }

    return result.data;
  }

  /**
   * 添加数据，过期时间单位秒
   * @param {string} key - 要设置的数据的键名
   * @param {any} value - 要存储的数据
   * @param {number} [dieTime] - 数据的过期时间，单位为秒
   * @returns {Promise<void>} - 返回一个 Promise，表示设置操作的完成状态
   */
  static async set(key: string, value: any, dieTime?: number): Promise<void> {
    const data: IData = {
      expires: null,
      data: value,
    };
    if (dieTime) {
      // 如果有传入过期时间，则记录过期时间戳
      data.expires = Date.now() + dieTime * 1000;
    }
    await localforage.setItem(key, data);
  }

  /**
   * 清除所有数据
   */
  static clear = localforage.clear;

  /**
   * 获取数据的数量
   */
  static storeLength = localforage.length;

  /**
   * 移除单项数据
   * @param {string} key - 要移除的数据的键名
   * @returns {Promise<void>} - 返回一个 Promise，表示移除操作的完成状态
   */
  static remove(key: string): Promise<void> {
    return localforage.removeItem(key);
  }

  /**
   * 获取键名
   * @param {number} index - 索引
   * @returns {Promise<string | null>} - 返回一个 Promise，包含键名
   */
  static async key(index: number): Promise<string | null> {
    try {
      const keyName = await localforage.key(index);
      return keyName;
    } catch (err) {
      console.log(err); // 捕获错误时输出
      return null;
    }
  }

  /**
   * 获取所有键
   * @returns {Promise<string[]>} - 返回一个 Promise，包含所有键的数组
   */
  static async keys(): Promise<string[]> {
    try {
      const keys = await localforage.keys();
      return keys;
    } catch (err) {
      return [];
    }
  }

  /**
   * 迭代数据仓库中的所有 key/value 键值对。
   * @param {Function} iteratorCallback - 在每一个键值对上都会调用的回调函数
   * @param {Function} successCallback - 迭代完成时调用的回调函数
   */
  static async iterate(
    iteratorCallback: (value: any, key: string, iterationNumber: number) => any,
    successCallback: () => void,
  ): Promise<any> {
    try {
      const result = await localforage.iterate(
        (value, key, iterationNumber) => {
          return iteratorCallback(value, key, iterationNumber);
        },
      );
      successCallback();
      return result;
    } catch (err) {
      console.log(err); // 捕获错误时输出
      return null;
    }
  }

  /**
   * 强制设置特定的驱动。
   * @param {string | string[]} driverName - 要设置的驱动名称或驱动名称数组
   */
  static setDriver(driverName: string | string[]): void {
    localforage.setDriver(driverName);
  }

  /**
   * 设置 localForage 选项。
   * @param {object} options - 配置选项对象
   * @param {string | string[]} [options.driver] - 要使用的首选驱动。与 setDriver 方法的值格式相同。
   * @param {string} [options.name] - 数据库的名称。在 localStorage 中作为存储在其中的所有 key 的前缀。
   * @param {number} [options.size] - 数据库的大小（以字节为单位）。目前仅用于 WebSQL。
   * @param {string} [options.storeName] - 数据仓库的名称，在 IndexedDB 中为 dataStore，在 WebSQL 中为数据库 key/value 表的名称。
   * @param {number} [options.version] - 数据库的版本，未来可用于升级。
   * @param {string} [options.description] - 数据库的描述，一般是提供给开发者的。
   */
  static config(options: {
    driver?: string | string[];
    name?: string;
    size?: number;
    storeName?: string;
    version?: number;
    description?: string;
  }): void {
    localforage.config(options);
  }

  /**
   * 创建并返回一个 localForage 的新实例。每个实例对象都有独立的数据库，而不会影响到其他实例。
   * @param {LocalForageOptions} options - 用于配置新实例的选项对象，包括数据库名称等
   * @returns {LocalForage} - 返回一个新的 localForage 实例
   */
  static createInstance(options: LocalForageOptions): LocalForage {
    return localforage.createInstance(options);
  }

  /**
   * 获取所有值
   * @returns {Promise<any[]>} - 返回一个 Promise，包含所有值的数组
   */
  static values(): Promise<any[]> {
    return localforage
      .keys()
      .then((keys) => Promise.all(keys.map((key) => Storage.get(key))));
  }

  /**
   * 删除指定的 localForage 实例或数据仓库。
   * 若不传参，将删除当前实例的数据仓库。
   * 若参数为一个指定了 name 和 storeName 属性的对象，会删除指定的数据仓库。
   * 若参数为一个仅指定了 name 属性的对象，将删除指定的数据库（及其所有数据仓库）。
   * @param {DropInstanceOptions} [options] - 用于指定要删除的实例或数据仓库的选项对象
   * @returns {Promise<void>} - 返回一个 Promise，在删除操作完成时解析
   */
  static dropInstance(options?: DropInstanceOptions): Promise<void> {
    return localforage.dropInstance(options);
  }

  /**
   * 获取所有键值对
   * @returns {Promise<[string, any][]>} - 返回一个 Promise，包含所有键值对的数组
   */
  static entries(): Promise<[string, any][]> {
    return localforage.keys().then((keys) =>
      Promise.all(
        keys.map((key) =>
          Storage.get(key).then((value) => {
            if (value !== null) return [key, value] as [string, any];

            return [key, null] as [string, any];
          }),
        ),
      ),
    );
  }
}
export { Storage };
