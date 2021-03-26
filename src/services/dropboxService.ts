import { Dropbox } from 'dropbox';
import _fetch from 'isomorphic-fetch';

let dropbox: Dropbox;

const initDropbox = () => {
  dropbox = new Dropbox({
    accessToken: 'oDm3_-3br4cAAAAAAAG4jAOBl0tgqzsLfNyQNjisoLRuwEpX5Fc40fPNKIAtFEYy',
    fetch: _fetch,
  });
};

type CommitedFile = {
  contents: Object;
  path: string;
};

export const uploadFile = (commitedFile: CommitedFile) => {
  if (dropbox === undefined) initDropbox();

  dropbox.filesUpload({
    contents: commitedFile.contents,
    path: commitedFile.path,
    mode: { '.tag': 'overwrite' },
  });
};
