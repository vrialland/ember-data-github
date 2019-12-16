import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  repository: belongsTo('github-repository', { inverse: null }),
  subject: attr(),
  reason: attr(),
  unread: attr('boolean'),
  updatedAt: attr('date'),
  lastReadAt: attr('date'),
  url: attr('string')
});
