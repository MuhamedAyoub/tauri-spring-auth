package esi.asci.auth.interfaces;

import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@RequiredArgsConstructor
public   class  Error {
    private String message;
    private Integer code;
    public Error(String message, Integer code) {
        this.message = message;
        this.code = code;
    }
    @Override
    public String toString() {
        return "Error{" +
                "message='" + message + '\'' +
                ", code='" + code + '\'' +
                '}';
    }

}
