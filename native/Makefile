# Variables

libdir = /qsys.lib/$(LIB).lib

PGMS = $(libdir)/SIMPLECALC.PGM \
       $(libdir)/LINUX_CALC.PGM

GENSRC = LnxCalcItf

rootdir = $(shell pwd)

sshhost = eradani-lpar-root

ifndef LIB
  $(error Please define the LIB environment variable and try again)
endif

# Rules

all: $(PGMS)

# Programs

$(libdir)/SIMPLECALC.PGM: simplecalc.rpgle
	system "CHGATR OBJ('$(rootdir)/simplecalc.rpgle') ATR(*CCSID) VALUE(819)"
	system "CRTBNDRPG PGM($(LIB)/SIMPLECALC) SRCSTMF('$<')"

$(libdir)/LINUX_CALC.PGM: linux_calc.rpgle
	system "CHGATR OBJ('$(rootdir)/linux_calc.rpgle') ATR(*CCSID) VALUE(819)"
	system "CRTBNDRPG PGM($(LIB)/LINUX_CALC) SRCSTMF('$<')"

$(libdir)/LINUX_CALC.PGM: LnxCalcItf.rpgleinc

LnxCalcItf.rpgleinc LnxCalcItf.ts: linux_calc.yaml
	npm run generate -- -f $<
	cp LnxClcItf.ts ../src/models

.PHONY: library
library:
	-system "CRTLIB $(LIB)"

.PHONY: clean
clean:
	-system "DLTPGM PGM($(LIB)/SIMPLECALC)"
	-system "DLTPGM PGM($(LIB)/LINUX_CALC)"
	-rm *.clleinc *.rpgleinc *.js *.ts
