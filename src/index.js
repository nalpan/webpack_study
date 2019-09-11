import moduleFunc from './module';
// 非モジュールはimport時に全実行される
import './no-module';

// モジュールは明示的に呼ぶ
moduleFunc();
