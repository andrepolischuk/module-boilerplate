import test from 'ava';
import <%= camelName %> from './index.es5';

test(t => {
  t.true(<%= camelName %>('world') === 'Hello world');
});
