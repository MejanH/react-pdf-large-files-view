# View Large PDF files using `react-pdf` with selecting the file from the browser

- tried to view large files. Didn't face any issues but takes a huge amount of memory or CPU usage to view the file.
- the solution is to lazy load or load only those pages that need to be viewed. luckily there are some suggestions found from `react-pdf` samples and issues. Links are below.

#### Helpful Links
- outdated sample(but readme updated): https://github.com/michaeldzjap/react-pdf-sample
- React-window to rendering any large lists which also fixes the large pdf pages issue: https://github.com/bvaughn/react-window
- related issue: https://github.com/wojtekmaj/react-pdf/issues/94
    - the solution from the repo owner in the issue: https://github.com/wojtekmaj/react-pdf/issues/94#issuecomment-1308463549
- example with react-window and infinite loader:
    - https://codesandbox.io/s/react-pdf-react-window-x3xzzg
    - full screen example: https://codesandbox.io/s/react-pdf-react-window-fullscreen-ky4yy0