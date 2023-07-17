class ValidaCPF {
    constructor(cpfEnviado) {
      Object.defineProperty(this, "cpfLimpo", {
        writable: false,
        enumerable: true,
        consfigurable: false,
        value: cpfEnviado.replace(/\D+/g, ""),
      });
    }
  
    éSequencia() {
      return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }
  
    geraNovoCpf() {
      const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
      const digito1 = this.geraDigito(cpfSemDigitos);
      const digito2 = this.geraDigito(cpfSemDigitos + digito1);
      this.novoCPF = cpfSemDigitos + digito1 + digito2;
    }
    geraDigito(cpfSemDigitos) {
      let total = 0;
      let reverso = cpfSemDigitos.length + 1;
  
      for(let StringNumerica of cpfSemDigitos) {
        total += reverso * Number(StringNumerica);
        reverso--;
      }
      const digito = 11 - (total % 11);
      return digito <= 9 ? String(digito) : "0";
    }
  
    valida() {
      if (!this.cpfLimpo) return false;
      if (typeof this.cpfLimpo !== "string") return false;
      if (this.cpfLimpo.length !== 11) return false;
      if (this.éSequencia()) return false;
      this.geraNovoCpf();
      return this.novoCPF === this.cpfLimpo;
    }
  }
  