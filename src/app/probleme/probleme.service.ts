
// private baseUrl = 'https://localhost:7231/v1/probleme';


// constructor(private _http: HttpClient) { }

// saveProbleme(probleme: IProbleme): Observable < IProbleme > {
//     return this.createProbleme(probleme);
// }

//  /** POST: add a new problem to the server */
// private createProbleme(probleme: IProbleme): Observable < IProbleme > {
//     return this._http.post<IProbleme>(this.baseUrl, probleme, this.httpOptions).pipe(
//         tap((probleme: IProbleme) => console.log('added problem w/ id=${probleme.id}')),
//         catchError(this.handleError)
//     );
// }

//   private httpOptions = {
//     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };
 
//   private handleError(err: HttpErrorResponse) {
//     // in a real world app, we may send the server to some remote logging infrastructure
//     // instead of just logging it to the console
//     console.error(err.error);
//     //return Observable.throw(err.message);
//     //return throwError(err.message); PÉRIMÉ
//     return throwError(() => new Error(err.message));
// }

// save(): void {
//     if(this.problemeForm.dirty && this.problemeForm.valid) {
//     // Copy the form values over the problem object values
//     this.probleme = this.problemeForm.value;
//     this.probleme.id = 0;
//     // Courriel est dans un groupe alors que this.probleme n'a pas de groupe.  Il faut le transférer explicitement.
//     if (this.problemeForm.get('courrielGroup.courriel').value != '') {
//         this.probleme.courriel = this.problemeForm.get('courrielGroup.courriel').value;
//     }

//     this.problemeService.saveProbleme(this.probleme)
//         .subscribe({
//             next: () => this.onSaveComplete(),
//             error: err => this.errorMessage = err
//         })
// } else if (!this.problemeForm.dirty) {
//     this.onSaveComplete();
// }
// }

// onSaveComplete(): void {
//     // Reset the form to clear the flags
//     this.problemeForm.reset();  // Pour remettre Dirty à false.  Autrement le Route Guard va dire que le formulaire n'est pas sauvegardé
//     this.route.navigate(['/accueil']);
// }