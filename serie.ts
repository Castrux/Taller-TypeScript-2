class Serie {
  private _titulo: string;
  private _genero: string;
  private _temporadas: number;
  private _episodios: number;
  private _sinopsis: string;
  
  constructor(titulo: string, genero: string, temporadas: number, episodios: number, sinopsis: string) {
    this._titulo = titulo;
    this._genero = genero;
    this._temporadas = temporadas;
    this._episodios = episodios;
    this._sinopsis = sinopsis;
  }
  
  // Getters y Setters
  
  get titulo(): string {
    return this._titulo;
  }
  
  set titulo(titulo: string) {
    this._titulo = titulo;
  }
  
  get genero(): string {
    return this._genero;
  }
  
  set genero(genero: string) {
    this._genero = genero;
  }
  
  get temporadas(): number {
    return this._temporadas;
  }
  
  set temporadas(temporadas: number) {
    this._temporadas = temporadas;
  }
  
  get episodios(): number {
    return this._episodios;
  }
  
  set episodios(episodios: number) {
    this._episodios = episodios;
  }
  
  get sinopsis(): string {
    return this._sinopsis;
  }
  
  set sinopsis(sinopsis: string) {
    this._sinopsis = sinopsis;
  }
}
