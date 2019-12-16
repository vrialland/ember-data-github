import GithubSerializer from 'ember-data-github/serializers/github';
import DS from 'ember-data';

const { EmbeddedRecordsMixin } = DS;

export default GithubSerializer.extend(EmbeddedRecordsMixin, {
  attrs: {
    repository: { embedded: 'always' }
  }
});
